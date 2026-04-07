# 🧪 Test Execution Summary – E-commerce Demo Site

## 📌 Test Scope

This test execution covers manual validation of the following features:

- Product Sorting
  - Price (Low → High, High → Low)
  - CO2 Rating (Low → High, High → Low)
  - Sorting persistence across pagination

- Authentication
  - Login with valid credentials
  - Login with invalid credentials
  - Error handling and validation feedback

- Session Management
  - Session persistence after page refresh

---

## 📊 Test Execution Results

| Feature            | Total Tests | Passed | Failed |
|------------------|------------|--------|--------|
| Price Sorting     | 6          | 4      | 2      |
| CO2 Sorting       | 3          | 2      | 1      |
| Invalid Login     | 3          | 2      | 1      |
| Valid Login       | 3          | 3      | 0      |
| **Total**         | **15**     | **11** | **4**  |

---

## ❌ Failed Test Cases & Defect Mapping

### 1. Price Sorting Failure
- **Test Case:** Sorting persistence / dropdown reflection  
- **Bug:** *Selected sort option is not visually reflected in dropdown after selection*  
- **Severity:** High  

---

### 2. CO2 Sorting Failure
- **Test Case:** CO2 sorting accuracy (High → Low)  
- **Bug:** *Sort by CO2 Rating (E → A) shows items out of order on PLP*  
- **Severity:** High  

---

### 3. Invalid Login Failure
- **Test Case:** Error messaging clarity for invalid credentials  
- **Bug:** *Invalid login attempt does not clearly identify which credential is incorrect*  
- **Severity:** Medium  

---

## 🐞 Defects Identified

### 🔴 High Priority

- Sort by CO2 Rating (E → A) shows items out of order on PLP  
- Selected sort option is not visually reflected in dropdown after selection  
- Applying filter resets selected sort option on PLP  

### 🟠 Medium Priority

- Invalid login attempt does not clearly identify which credential is incorrect  

---

## 🧠 Key Observations

- Price sorting works correctly in most cases but has UI inconsistency with dropdown state  
- CO2 sorting has a functional defect affecting sorting accuracy  
- Sorting state is not preserved when filters are applied (state management issue)  
- Login validation works but lacks clarity in user feedback for invalid credentials  
- Successful login and session persistence behave as expected  

---

## ⚠️ Risks & Notes

- Testing performed on a demo environment; behavior may vary in production  
- Limited test data may impact edge case validation  
- UI state inconsistencies suggest potential issues with frontend state management  

---

## ✅ Conclusion

Core functionality is mostly stable; however, several issues related to sorting accuracy and UI state management were identified.  

While these defects do not block all functionality, they impact user experience and should be addressed to ensure consistency and usability.