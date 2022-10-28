# Svelte Template

This repo is a template svelte app that provides useful features that are ready to use with minimal configuration required.

## Table of Contents:

- [Svelte Template](#svelte-template)
  - [Table of Contents:](#table-of-contents)
- [Setup for Local Development](#setup-for-local-development)
  - [Setup up SSH](#setup-up-ssh)
  - [Install requirements](#install-requirements)
  - [Setup Environment](#setup-environment)
  - [Building](#building)
- [Utility Functions](#utility-functions)
  - [Accessing Environment Variables](#accessing-environment-variables)
  - [Logging](#logging)
  - [Cookie Management](#cookie-management)
- [Svelte Routing](#svelte-routing)
  - [Layout Route](#layout-route)
  - [Error Route](#error-route)
  - [Page Route](#page-route)
- [Styling](#styling)
  - [PostCSS](#postcss)
  - [Static Assets](#static-assets)
- [Analytics](#analytics)
  - [DataDog](#datadog)
  - [Google Tag Manager](#google-tag-manager)
- [Code Quality](#code-quality)
    - [ESLint Rules](#eslint-rules)
    - [Prettier and VSCode Settings](#prettier-and-vscode-settings)
    - [Husky](#husky)
    - [Github Workflows](#github-workflows)
    - [CODEOWNERS](#codeowners)
    - [CSP Security Header Generation](#csp-security-header-generation)

# Setup for Local Development

These instructions assume that you have Git cli and Homebrew installed.

## Setup up SSH

- Check for [existing SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)

- Create a [new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- Add your [SSH key to Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Clone the repo:

```
git clone git@github.com:invitation-homes/svelte-template.git
```

## Install requirements

- Install Volta: `brew install volta`
- Install Node: `volta install node`
- Install Yarn: `volta install yarn`

## Setup Environment

- Edit local.env file by updating all the fields that have asterisks.

  > Everytime you make changes to your local.env file, if the variable is used in the client side of the application, you'll need to rebuild the application to update the values.

  > It is not required to enable GTM or DataDog for development

- Source the local.env file

  ```
  source local.env
  ```

- Install dependences . . . and make sure there are no errors

  ```
  yarn
  ```

- And now to run the project

  ```
  yarn dev
  ```

- Navigate to [http://localhost:3000/](http://localhost:3000/) to view the app!

## Building

To view the build version of the app run:

```bash
yarn run build
```

# Utility Functions

## Accessing Environment Variables

As new environment variables are needed, they should be added to local.env first.

Client side variables should be prefixed with `VITE_`.

For example: `VITE_INVH_DOMAIN_NAME`. When consuming environment variables on the client side we use the safeEnv method to import the variables.

The safeEnv method allows for a "fallback" value if the environment variable is not set.

i.e `safeEnv("VITE_INVH_DOMAIN_NAME", { fallback: ""})`.

For server side environment variables the prefix is not required, nor is the safeEnv function.

## Logging

Svelte Template comes with the Invitation Homes Logger, an abstraction of the Winston logging library, configured and ready for use.

The Invitation Homes Logger has 6 logging levels and each takes a string and context object.

```typescript
const logger: Logger = createLogger();

logger.trace('A trace level log message');

const customer = {
  firstName: 'John',
  lastName: 'Doe',
};

logger.debug('A debug message with some context', customer);
logger.info('An info message with some context', customer);
logger.warn('A warn message with some context', customer);
logger.error('An error message with some context', customer);
logger.fatal('A fatal message with some context', customer);
```

> For more information visit: [Invitation Homes Logger](https://www.npmjs.com/package/@invitation-homes/logger)

## Cookie Management

Provides four utility functions for use on the client to format, set, parse and delete a cookie. Tests for these functions can be found in `__tests__/utils/cookie-management.ts`.

# Svelte Routing

## Layout Route

A default layout route has been added which is wrapped with the [Svelte UI](https://github.com/invitation-homes/svelte-ui) Theme component. The Theme component provides not only the styles _required_ for the Svelte UI components (Button, Toast, MessageBox, etc..), but also supplies css color variables based on the InvitationHomes style guide that can be accessed by any child component of `+layout.svelte`. To see a full list of css variables visit: [Theme Component](https://github.com/invitation-homes/svelte-ui/blob/main/src/lib/Theme/Theme.svelte)

To access a variable provided by the Theme component simply use the [var css function](https://developer.mozilla.org/en-US/docs/Web/CSS/var) and pass in the corresponding CSS variable name. An example of this can be found in the style tag of `+layout.svelte`.

> For more information about error routing in Svelte visit: [Svelte Docs - Error Routes](https://kit.svelte.dev/docs/routing#error)

## Error Route

The `+error.svelte` is displayed when a routing error has occured. During local development this can be easily triggered by attempting to visit any non-existing route, for example [https:localhost:3000/non-existent-route](https://localhost:3000/non-existent-route)

An important thing to keep in mind when handling errors is that the `+error.svelte` content _will_ be nested within the `+layout.svelte` wrapper.

> For more information about layout routing in Svelte visit: [Svelte Docs - Layout Routes](https://kit.svelte.dev/docs/routing#layout)

## Page Route

The `+page.svelte` is an example page route in Svelte. The name `page` is a reserved word.

> For more information about page routing in Svelte visit: [Svelte Docs - Page Routes](https://kit.svelte.dev/docs/routing#page)

# Styling

## PostCSS

The PostCSS [custom-media-queries plugin](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media) has been used in multiple Invitation Homes svelte apps and has been found to provide a lightweight and semantic solution to the necessity of media breakpoints for styling in CSS.

The custom PostCSS breakpoint declarations can be found `/src/postcss/custom-media.css`

Example usage:

```css
@media (--mobile-only) {
  h1 {
    color: red;
  }
}
```

In this example the `h1` will have the `color:red` style until the screen expands to a width of 767px or greater

**Note:** The Postcss queries do not need to be imported in to the file to be accessed.

The following repos have implementations of postcss media queries: [Leasing Application](https://github.com/invitation-homes/leasing-application-webclient), [Customer Website](https://github.com/invitation-homes/customer-website) and [Customer Profile](https://github.com/invitation-homes/customer-profile-webapp).

## Static Assets

The Invitation Homes logo favicon has been set in `app.html`.

A `fonts.css` file imports the Hind & Nunito font types which are consistent with the Invitation Homes style guide.

The `variables.css` is meant to house CSS variables which can be used throughout the project. To declare CSS variables simply prepend `--` before your variable name and separate individual words with a hyphen. Then, following a `:`, assign the CSS property value.

```css
:root {
  --font-primary: Hind;
}
```

To consume custom css variables simply use the native `var` function and pass in the CSS variable name. A "fallback" value can be added as a second parameter.

```html
<p>Example</p>

<style>
  p {
    font-family: var(--font-primary, Ariel);
  }
</style>
```

**Note:** The fallback value will be used if the css variable is undefined or has an invalid property value

# Analytics

## DataDog

[DataDog](https://www.datadoghq.com/) is a cloud monitoring service used for collecting useful information about a projects stability, performance and user incteractions.

**Note:** The DataDog component does not need to be enabled for the Svelte Template to run.

To get the most out of the DataDog svelte component it is recommended to make it a child of the `+layout.svelte` route.

> For a live example of this, please see the [Customer Profile Webapp Layout](https://github.com/invitation-homes/customer-profile-webapp/blob/main/src/routes/%2Blayout.svelte)

## Google Tag Manager

[Google Tag Manager](https://developers.google.com/tag-platform/tag-manager) is a tag management system that allows you to configure and deploy marketing tags on your project without having to modify the code.

**Note:** The Google Tag Manager component does not need to be enabled for the Svelte Template to run.

To get the most out of the Google Tag Manager component it is recommended to make it a child of the `+layout.svelte` route.

> For a live example of this, please see the [Customer Profile Webapp Layout](https://github.com/invitation-homes/customer-profile-webapp/blob/main/src/routes/%2Blayout.svelte)

# Code Quality

### ESLint Rules

The default configuration has been derived from the [rules proposed by the Javascript SIG](https://invitationhomes.atlassian.net/wiki/spaces/TECH/pages/1163296798/ESLint+-+Static+analysis#Proposed-Rules) and the [Technology Decisions](https://github.com/invitation-homes/technology-decisions)

### Prettier and VSCode Settings

Prettier is used for code formatting. For VS Code, install the [Prettier for ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) extension.

For all of the rules in `vscode/settings.json` to take effect the following VS Code extensions must be installed.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

### Husky

Husky hooks ensure high commit message quality and consistency in accordance with the Invitation Homes git commit message formatting guidelines.

> For more information about the formatting conventions visit: [Technology Decisions - Git Commit Conventions](https://github.com/invitation-homes/technology-decisions/blob/main/0078-git-commit-conventions.md)

**Note:** The `pre-commit` husky hook uses the [lint-staged](https://github.com/okonet/lint-staged) package in conjunction with the `jest --coverage` command to display a comprehensive report of the test coverage of the local files changed on a given branch.

The coverage check can be bypassed during development using the `git commit --no-verify` flag, however the development branch will need to pass the coverage threshhold set in `jest.config.js` before merge.

### Github Workflows

The following workflows run when a pull request is opened or reopened or when the head branch of the pull request is updated.

1. [Jira Lint](https://github.com/invitation-homes/jira-lint): A light-weight lint workflow when using GitHub along with JIRA for project management.
2. run-jest-test: Runs `yarn test --passWithNoTests`
3. lint-code: Runs `yarn lint`
4. build.yml: Runs `yarn build`

For more information about these commands visit `package.json > scripts`

### CODEOWNERS

This file allows you to specify the default reviewers when someone opens a pull request in Svelte Template project.

### CSP Security Header Generation

Generate Content Security Policy for API headers. For usage directions see the [CSP Readme.MD](/csp/README.md#usage).
