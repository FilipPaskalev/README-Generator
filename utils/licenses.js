import MIT from './utils/templates/mit.js';
import APACHE from './utils/templates/apacheV2.js';
import AFL from './utils/templates/aflV3.js';
import ARTISTIC from './utils/templates/artisticV2.js';

export default licenses = {
  default: {
    name: 'Default',
    description: 'No license',
    template: 'none',
  },
  'AFL-3.0': {
    name: 'Academic Free License v3.0',
    abbreviation: 'AFL-3.0',
    template: AFL,
  },
  'Apache-2.0': {
    name: 'Apache license 2.0',
    abbreviation: 'Apache-2.0',
    template: APACHE,
  },
  'Artistic-2.0': {
    name: 'Artistic license 2.0',
    abbreviation: 'Artistic-2.0',
    template: ARTISTIC,
  },
  MIT: {
    name: 'Massachusetts Institute of Technology',
    abbreviation: 'MIT',
    template: MIT,
  },
};

// export default licenses = new Map([
//   ['BSL-1.0', ['Boost Software License 1.0', 'Your description for BSL-1.0']],
//   ['BSD-2-Clause', ["BSD 2-clause 'Simplified' license", 'Your description for BSD-2-Clause']],
//   [
//     'BSD-3-Clause',
//     ["BSD 3-clause 'New' or 'Revised' license", 'Your description for BSD-3-Clause'],
//   ],
//   ['BSD-3-Clause-Clear', ['BSD 3-clause Clear license', 'Your description for BSD-3-Clause-Clear']],
//   [
//     'BSD-4-Clause',
//     ["BSD 4-clause 'Original' or 'Old' license", 'Your description for BSD-4-Clause'],
//   ],
//   ['0BSD', ['BSD Zero-Clause license', 'Your description for 0BSD']],
//   ['CC', ['Creative Commons license family', 'Your description for CC']],
//   ['CC0-1.0', ['Creative Commons Zero v1.0 Universal', 'Your description for CC0-1.0']],
//   ['CC-BY-4.0', ['Creative Commons Attribution 4.0', 'Your description for CC-BY-4.0']],
//   [
//     'CC-BY-SA-4.0',
//     ['Creative Commons Attribution ShareAlike 4.0', 'Your description for CC-BY-SA-4.0'],
//   ],
//   ['WTFPL', ['Do What The F*ck You Want To Public License', 'Your description for WTFPL']],
//   ['ECL-2.0', ['Educational Community License v2.0', 'Your description for ECL-2.0']],
//   ['EPL-1.0', ['Eclipse Public License 1.0', 'Your description for EPL-1.0']],
//   ['EPL-2.0', ['Eclipse Public License 2.0', 'Your description for EPL-2.0']],
//   ['EUPL-1.1', ['European Union Public License 1.1', 'Your description for EUPL-1.1']],
//   ['AGPL-3.0', ['GNU Affero General Public License v3.0', 'Your description for AGPL-3.0']],
//   ['GPL', ['GNU General Public License family', 'Your description for GPL']],
//   ['GPL-2.0', ['GNU General Public License v2.0', 'Your description for GPL-2.0']],
//   ['GPL-3.0', ['GNU General Public License v3.0', 'Your description for GPL-3.0']],
//   ['LGPL', ['GNU Lesser General Public License family', 'Your description for LGPL']],
//   ['LGPL-2.1', ['GNU Lesser General Public License v2.1', 'Your description for LGPL-2.1']],
//   ['LGPL-3.0', ['GNU Lesser General Public License v3.0', 'Your description for LGPL-3.0']],
//   ['ISC', ['ISC', 'Your description for ISC']],
//   ['LPPL-1.3c', ['LaTeX Project Public License v1.3c', 'Your description for LPPL-1.3c']],
//   ['MS-PL', ['Microsoft Public License', 'Your description for MS-PL']],
//   ['MPL-2.0', ['Mozilla Public License 2.0', 'Your description for MPL-2.0']],
//   ['OSL-3.0', ['Open Software License 3.0', 'Your description for OSL-3.0']],
//   ['PostgreSQL', ['PostgreSQL License', 'Your description for PostgreSQL']],
//   ['OFL-1.1', ['SIL Open Font License 1.1', 'Your description for OFL-1.1']],
//   ['NCSA', ['University of Illinois/NCSA Open Source License', 'Your description for NCSA']],
//   ['Unlicense', ['The Unlicense', 'Your description for Unlicense']],
//   ['Zlib', ['zLib License', 'Your description for Zlib']],
// ]);
