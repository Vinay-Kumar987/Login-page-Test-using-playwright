# Playwright Login Page Automation

## Project Overview

This project automates the login functionality of the Practice Test Automation website using Playwright with JavaScript.

The automation covers positive and negative functional test scenarios for the login page.

## Application Under Test

URL:

https://practicetestautomation.com/practice-test-login/

## Technology Used

* Playwright
* JavaScript
* Node.js
* Playwright Test

## Test Credentials

### Valid Credentials

Username:

```text
student
```

Password:

```text
Password123
```

## Automated Test Cases

The project contains positive and negative login test scenarios.

### Positive Test Cases

* TC_001 - Verify login page is opened
* TC_002 - Verify login with valid username and password
* TC_003 - Verify username field is visible
* TC_004 - Verify password field is visible
* TC_005 - Verify Submit button is visible and enabled

### Negative Test Cases

* TC_006 - Verify login with invalid username
* TC_007 - Verify login with invalid password
* TC_008 - Verify login with invalid username and password
* TC_009 - Verify login with empty username
* TC_010 - Verify login with empty password

### Additional Test

* TC_011 - Verify login with empty username and password

## Project Structure

```text
Playwright-Login-Automation/
│
├── tests/
│   └── login.spec.js
│
├── README.md
├── playwright.config.js
├── package.json
└── package-lock.json
```

## Prerequisites

The following software is required:

* Node.js
* npm
* Git

Check Node.js installation:

```bash
node --version
```

Check npm installation:

```bash
npm --version
```

## Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Go to the project directory:

```bash
cd Playwright-Login-Automation
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all Playwright tests:

```bash
npx playwright test
```

## Run Tests with Browser

To see the browser while tests are running:

```bash
npx playwright test --headed
```

## Run Login Test File

```bash
npx playwright test tests/login.spec.js --headed
```

## Run a Specific Test Case

For example, to run TC_002:

```bash
npx playwright test tests/login.spec.js -g "TC_002" --headed
```

## Test Report

After test execution, Playwright generates an HTML test report.

Open the report using:

```bash
npx playwright show-report
```

The report provides:

* Passed tests
* Failed tests
* Test execution time
* Browser information
* Error details
* Test steps

## Example Test Execution

```text
Running Playwright Tests

11 tests passed
```

The actual number of passed tests may vary depending on the test cases included in the project.

## Test Framework Features

This project uses:

* Playwright Test
* `beforeEach` hook
* `afterEach` hook
* Locators
* Page actions
* Assertions
* Positive test scenarios
* Negative test scenarios

## Author

Vinay Kumar
