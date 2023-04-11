# Configure Prettier and ESLint with Angular

1. Open the terminal and install ESLint schematics using this command:
`ng add @angular-eslint/schematics`
2. Install and configure Prettier
- Add .prettierrc.json and .prettierignore files to root of project directory
3. Configure Prettier to be used as an ESLint plugin using this command:
`npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev`
4. Copy over contents from .eslintrc.json and .prettierrc.json files
5. Add html to Webstorm prettier settings and click 'run on save' checkbox
