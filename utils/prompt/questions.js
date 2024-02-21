import DEFAULT_VALUES from './defVal.js';
import FILTERS from './filters.js';
import SHADOW_MESSAGES from './shadowMessages.js';
import MSG_LABELS from './messageLabels.js';

// array of questions for user
const promptQuestions = [
  {
    type: 'input',
    name: 'title',
    message: MSG_LABELS.title,
    default: SHADOW_MESSAGES.title,
    filter: FILTERS.filterTitle,
  },
  {
    type: 'input',
    name: 'description',
    message: MSG_LABELS.description,
    default: SHADOW_MESSAGES.description,
    filter: FILTERS.filterDescription,
  },
  // {
  //   type: 'input',
  //   name: 'toc',
  //   message: PROMPT_MESSAGES.toc,
  //   default: SHADOW_MESSAGES.toc,
  //   filter: PROMPT_FILTERS.tocFilter,
  // },
  {
    type: 'input',
    name: 'installation',
    message: MSG_LABELS.installation,
    default: SHADOW_MESSAGES.installation,
    filter: FILTERS.filterInstallation,
  },
  {
    type: 'input',
    name: 'usage',
    message: MSG_LABELS.usage,
    default: SHADOW_MESSAGES.usage,
    filter: FILTERS.filterUsage,
  },
  // {
  //   type: 'list',
  //   name: 'license',
  //   message: PROMPT_MESSAGES.license,
  //   default: SHADOW_MESSAGES.license,
  //   choices: licenseChoiceList,
  //   filter: PROMPT_FILTERS.licenseFilter,
  // },
  {
    type: 'input',
    name: 'contributing',
    message: MSG_LABELS.contributing,
    default: SHADOW_MESSAGES.contributing,
    filter: FILTERS.filterContributing,
  },
  {
    type: 'input',
    name: 'tests',
    message: MSG_LABELS.tests,
    default: SHADOW_MESSAGES.tests,
    filter: FILTERS.filterTests,
  },

  {
    type: 'questions',
    name: 'questions',
    message: MSG_LABELS.questions,
    default: SHADOW_MESSAGES.questions,
    filter: FILTERS.filterQuestions,
  },
];

export default promptQuestions;
