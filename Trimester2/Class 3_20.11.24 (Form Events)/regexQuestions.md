### **Regex Pattern Creation Exercises**


#### **Questions**


1. **Email Validation**
   - Create a regex pattern to validate email addresses. The email should:
     - Start with alphanumeric characters.
     - Contain a single "@" symbol.
     - Have a domain name with at least one dot (e.g., `example.com`).
     - Allow subdomains (e.g., `mail.example.com`).


    /^[a-z0-9]+@+[a-z]+\.([a-z]+\.)*?[a-z]+$/gm
    /^[a-z0-9]+@+[a-z]+(\.[a-z])+$/gm


2. **Phone Number Validation**
   - To validate Indian phone numbers, which typically:
   - Start with +91 (optional country code) or 0 (optional leading digit).
   - Have 10 digits, starting with a digit from 6 to 9.


    /^((\+[0-9]{1,3})|0)[6-9]{1}[0-9]{9}$/gm


3. **Password Strength Validation**
   - Create a regex pattern to validate passwords. A valid password must:
     - Be at least 8 characters long.
     - Contain at least one uppercase letter, one lowercase letter, one digit, and one special character (e.g., `@`, `#`, `!`, etc.).


    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/gm


4. **Username Validation**
   - Write a regex to validate usernames. A valid username:
     - Contains only alphanumeric characters and underscores (`_`).
     - Starts with a letter.
     - Is between 3 and 16 characters long.


    /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/gm


5. **Date Validation**
   - Create a regex to validate dates in the format `DD/MM/YYYY`. The pattern should:
     - Allow valid day ranges (`01-31`).
     - Allow valid month ranges (`01-12`).
     - Accept any 4-digit year.


    /^(0[1-9]|[12][0-9]|[3][01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/gm


6. **URL Validation**
   - Write a regex to validate URLs. The URL should:
     - Start with `http://` or `https://`.
     - Include a domain name (e.g., `www.example.com`).
     - Allow optional query parameters and fragments (e.g., `?id=123#section`).


    /^(https:\/\/|hhtp:\/\/)www\.[a-z]+\.[a-z]+([\W].+)?$/gm


7. **Zip Code Validation**
   - Create a regex to validate U.S. ZIP codes. The ZIP code:
     - Should be 5 digits long (e.g., `12345`).
     - Can optionally include a hyphen and 4 more digits (e.g., `12345-6789`).


    /^[0-9]{5}((-[0-9]{5})+)?$/gm


---