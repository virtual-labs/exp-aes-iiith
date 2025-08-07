**Step 1: Select Test Case**

- Choose a test case from the dropdown menu at the top of the simulation
- Review the test case details that appear, including plaintext, key, IV (if applicable), mode, and key size
- Each test case represents a different AES encryption scenario with varying parameters

**Step 2: Key Size and Mode Configuration (Part I)**

- Enter the **Key Size (bits)** for the selected test case (e.g., 128, 192, or 256)
- Enter the **Mode** of operation (e.g., CBC, ECB, CFB, OFB, CTR)
- Click "Check your answer" to validate your entries
- Understanding: Key size determines the strength of encryption, while mode affects how blocks are processed

**Step 3: Encryption Parameters (Part II)**

- Enter the **Key (hex)** - the secret key used for encryption/decryption
- Enter the **IV (hex)** for modes that require initialization vectors (CBC, CFB, OFB, CTR)
- Enter the **CTR (hex)** for Counter mode if applicable
- Click "Check your answer" for each parameter to validate
- Note: Some modes like ECB don't require IV/CTR values

**Step 4: Plaintext Input (Part III)**

- Enter the **Plaintext** message that will be encrypted
- This is the original readable message before encryption
- Click "Check your answer" to validate the plaintext entry
- Understanding: This represents the sensitive data that needs to be protected

**Step 5: Hexadecimal Conversion (Part IV)**

- Enter the **Plaintext (hex, padded)** - the plaintext converted to hexadecimal format
- Include proper padding to ensure the data fits into complete AES blocks (16 bytes)
- Click "Check your answer" to validate the hex conversion
- Understanding: AES operates on fixed-size blocks, requiring proper padding

**Step 6: Final Encryption Result (Part V)**

- Enter the **Ciphertext (hex)** - the final encrypted output in hexadecimal format
- This represents the encrypted data that can be safely transmitted or stored
- Use either "Check Answer" or "Check your answer" button to validate
- Understanding: This is the protected form of your original message
