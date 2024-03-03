const MENU_MSGS = require('../../utils/json/menuMsgs.json');

const projectNameValidator = (value) => {
  if (value.trim() === '') {
    return MENU_MSGS.projectTitleEmpty;
  }
  if (value.length > 50) {
    return MENU_MSGS.projectTitleTooLong;
  }
  return true;
};

module.exports = projectNameValidator;
