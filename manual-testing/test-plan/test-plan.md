# 🧪 Test Plan – E-commerce Demo Site (Sorting & Authentication)

## 📌 Objective

The objective of this test plan is to validate the core functionality of an e-commerce demo application, focusing on:

- Product sorting (Price and CO2 rating)
- User authentication (valid and invalid login scenarios)
- UI behavior and error handling
- Session persistence across user actions

---

## 📦 Scope

### ✅ In Scope

- Product Listing Page (PLP)
  - Price sorting (Low → High, High → Low)
  - CO2 rating sorting (Low → High, High → Low)
  - Sorting persistence across pagination

- Authentication
  - Login with valid credentials
  - Login with invalid credentials
  - Error messaging and validation states

- UI Feedback
  - Error messages for invalid inputs
  - Field validation styling (e.g., red borders)

- Session Management
  - Session persistence after page refresh

---

### ❌ Out of Scope

- Checkout and payment processing
- Performance testing (load, stress)
- Security testing (e.g., penetration testing)
- Cross-browser and cross-device testing
- Accessibility testing

---

## 🧪 Test Approach

Testing is performed using a combination of:

- **Manual Testing**
  - Test case execution
  - Exploratory testing
  - Bug reporting and validation

- **Automation Testing**
  - Playwright (JavaScript)
  - Page Object Model (POM) for maintainability
  - Validation of sorting functionality and UI behavior

---

## 🧾 Test Artifacts

- Test Cases: `manual-testing/test-cases/`
- Bug Reports: `manual-testing/bug-reports/`
- Test Execution Evidence: `manual-testing/test-reports/`
- Kanban Board (Notion): Used for tracking progress, user stories, and defects

---

## 🧑‍💻 Test Environment

- Application: Practice Software Testing Demo Site  
- Browser: Chrome (primary)  
- OS: Windows  
- Tools:
  - Playwright (automation)
  - Notion (test management)
  - GitHub (version control)

---

## 🧠 Test Types

- Functional Testing
- Regression Testing
- Negative Testing
- UI Validation Testing
- Session Testing

---

## ⚠️ Risks & Assumptions

### Risks
- Limited control over test environment (demo site instability)
- Test data may not be persistent across sessions
- Changes to the demo site may impact test results

### Assumptions
- Application functionality remains stable during testing
- Test users and product data are available
- Sorting logic is consistent across all pages

---

## ✅ Entry Criteria

- Application is accessible
- Required test data is available
- Test cases are defined and ready for execution

---

## 🛑 Exit Criteria

- All test cases have been executed
- Critical and high severity bugs are identified and documented
- Test results are recorded and reviewed

---

## 📊 QA Strategy Summary

This testing approach focuses on validating both **user-facing functionality** and **underlying data accuracy**, while simulating a real-world QA workflow using structured test cases, bug tracking, and Kanban-based test management.