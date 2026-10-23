const fieldLabels = {
  name: "Name",
  email: "Email",
  password: "Password",
};

const formatIssue = ({ field, message }) => {
  const label = fieldLabels[field];

  if (field === "email") return "Please enter a valid email address.";
  if (field === "password" && message.toLowerCase().includes("at least 8")) {
    return "Password must be at least 8 characters.";
  }
  if (label) return `${label}: ${message}`;
  return message;
};

export function getAuthError(error) {
  const data = error.response?.data;

  if (data?.message === "User already exists") {
    return {
      field: "email",
      message: "An account with this email already exists. Try logging in.",
    };
  }

  if (data?.message === "Invalid credentials") {
    return { field: "email", message: "Incorrect email or password." };
  }

  if (Array.isArray(data?.errors) && data.errors.length > 0) {
    const issue = data.errors[0];
    return {
      field: issue.field?.split(".")[0],
      message: formatIssue(issue),
    };
  }

  return {
    field: "",
    message: data?.message || "Something went wrong. Please try again.",
  };
}
