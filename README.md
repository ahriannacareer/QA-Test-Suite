# 🧪 QA Portfolio – Ahrianna Daniels

This repository showcases my QA experience across **manual testing and test automation**, including:

- UI automation using Playwright (JavaScript)
- Test case design and execution
- Bug tracking and reporting
- Kanban-based test management workflow

---

## 🚀 Highlights

- Designed and executed **15 manual test cases** across sorting and authentication flows  
- Identified and documented **4 functional defects** with clear severity and impact  
- Built automated UI tests using **Playwright (JavaScript) with Page Object Model (POM)**  
- Simulated a real QA workflow using **Kanban-based test management in Notion**  

---

## 📁 Portfolio Structure

- `automation/playwright-js` → UI & API automation tests using Playwright  
- `manual-testing/test-cases` → Manual test cases covering sorting and authentication  
- `manual-testing/test-plan` → Test planning and scope definition  
- `manual-testing/bug-reports` → Sample bug reports with screenshots and documentation  
- `manual-testing/kanban` → Kanban board screenshots & workflow  
- `manual-testing/test-reports` → Test execution results and summaries  

---

## 📌 Automation Project: Sorting & Authentication Validation

This project demonstrates automated UI testing using **Playwright** with a **Page Object Model (POM)** structure.

The test suite validates key functionality on an e-commerce demo site, including:

- Applying different sorting options  
- Verifying the selected sort is reflected in the UI  
- Validating that product data is correctly sorted  
- Ensuring sorting consistency across **multiple pagination pages**  
- Validating login behavior for both valid and invalid credentials  

This project was executed against a publicly available demo e-commerce application for portfolio demonstration and testing practice.

In addition to automation, this repository showcases **manual testing practices**, including bug tracking and test management using a Kanban workflow.

---

## 🧩 Tech Stack

- Playwright (JavaScript)  
- Node.js  
- Page Object Model (POM)  
- Notion (Test Management / Kanban Board)

---

## 📊 Test Management & Bug Tracking

A Kanban board was created in **Notion** to simulate a real-world QA workflow, including:

- User stories  
- Test execution tracking  
- Bug reporting and prioritization  
- Status progression (To Do → In Progress → Done)

🔗 **View Kanban Board (Notion):**  
https://sprinkle-television-fb0.notion.site/33a1503ad85080249eaaf334b1075dbb?v=33a1503ad8508021aa45000c28580fca&p=33a1503ad85080d5baf6cbcd236c520c&pm=s

📸 Screenshots of the board can be found in `manual-testing/kanban-board`, and bug evidence is available in `manual-testing/bug-reports`.

---

## ✅ Test Scenarios Covered

### 🔹 CO2 Rating Sorting

- Sort by CO2 Rating (A → E)  
- Validate dropdown selection  
- Verify ratings are sorted correctly  
- Confirm sorting across all pages  

### 🔹 Price Sorting

- Sort by Price (Low → High)  
- Validate dropdown selection  
- Verify numeric sorting accuracy  
- Confirm sorting across all pages  

### 🔹 Valid & Invalid User Authentication

- Verify users can successfully log in using valid credentials  
- Validate that users with invalid credentials remain on the login page  
- Confirm appropriate error messages are displayed for invalid email, password, or credentials  
- Ensure input fields reflect validation states (e.g., error styling for invalid inputs)  
- Verify session persistence after successful authentication (user remains logged in after page refresh)  

---

## 🐞 Bug Tracking

Sample bug reports are included to demonstrate real-world QA documentation, including:

- Steps to reproduce  
- Expected vs actual results  
- Severity and impact  
- Visual evidence (screenshots)

See: `manual-testing/bug-reports`

---

## ▶️ Running Automation Tests

```bash
npm install
npx playwright test