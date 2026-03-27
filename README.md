# Playwright UI Test Automation Framework

This project demonstrates an automated UI testing framework built using **Playwright and TypeScript**.

The framework automates browser interactions to validate application behavior and ensures software quality through automated testing.

---

## Project Features

- Automated UI testing using Playwright
- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model (POM) architecture
- Automated test execution
- HTML test reporting
- CI/CD integration using GitHub Actions

---



## Test Scenarios Implemented

1. **Valid Login Test**
   - Verify user can login with correct credentials

2. **Invalid Login Test**
   - Verify error message appears for incorrect login

3. **Login Page Title Verification**
   - Ensure the correct page title is displayed

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- GitHub Actions

---

## How to Run the Tests

Run the following command:
npx playwright test


---

## View Test Reports

After running tests, open the report:
npx playwright show-report


This will display a detailed HTML report of the test execution.

---

## Continuous Integration

The project includes a **GitHub Actions workflow** that automatically runs the test suite whenever code changes are pushed to the repository.





