### Resources
[#](https://www.markdownguide.org/cheat-sheet/)
https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji
https://emojipedia.org/
https://markdownguide.offshoot.io/extended-syntax/
https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/README.md
https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
https://opensource.org/license/bsl-1-0/
https://github.com/licenses/license-templates



https://stackoverflow.com/questions/66885208/how-to-add-all-unknown-words-by-code-spell-checker-to-dictionary-or-ignore-them
If the project is in another language, as @AnsonH mentioned you can install dictionaries in other languages.

Alternatively, you can run cspell-cli to return all of the unknown words so that you can copy and paste them into cSpell.words in your settings.json:

npx cspell-cli "src/**/*.{json,ts,tsx}" --words-only --unique --no-progress


