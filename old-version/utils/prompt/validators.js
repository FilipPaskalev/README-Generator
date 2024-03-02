const validateGitHubUsername = (username) => {
  const usernameRegex = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/;
  return usernameRegex.test(username) ? true : 'Please enter a valid GitHub username.';
};

const validateAuthorEmail = (authorEmail) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(authorEmail) ? true : 'Please enter a valid email address.';
};

export default {
  validateGitHubUsername,
  validateAuthorEmail,
};
