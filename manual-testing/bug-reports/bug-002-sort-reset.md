# 🐞 Bug Report – Selected Sort Option Not Reflected in Dropdown After Selection

## 📌 Summary

When a user selects a sorting option on the Product Listing Page, the selected value is not visually reflected in the **Sort By dropdown**. This creates confusion, as users cannot confirm which sorting rule is currently applied.

---

## 🔗 Environment

- URL: https://practicesoftwaretesting.com  
- Browser: Chrome (tested via Opera browser engine)  
- OS: Windows 11  

---

## ⚙️ Preconditions

- User is on the Product Listing Page  
- Sort By dropdown is visible and functional  
- Products are available for sorting  

---

## 🔁 Steps to Reproduce

1. Navigate to the Product Listing Page  
2. Select a sort option (e.g., **Price: Low to High** or **Name: A–Z**)  
3. Observe that products update based on the selected sort  
4. Check the value displayed in the **Sort By dropdown**  

---

## ✅ Expected Result

- The Sort By dropdown should display the currently selected sorting option  
- The selected value should remain visible after selection  
- Users should be able to clearly identify the active sorting rule  

---

## ❌ Actual Result

- The Sort By dropdown does not reflect the selected option  
- The dropdown appears reset or unchanged after selection  
- Users cannot determine which sorting option is currently active  

---

## 🚨 Severity

Major

---

## ⚠️ Priority

High

---

## 🧠 Impact

- Causes confusion when browsing products  
- Reduces trust in sorting functionality  
- Impacts usability and user experience  

---

## 📝 Notes

This issue was simulated by modifying test data for demonstration purposes in a controlled test environment.