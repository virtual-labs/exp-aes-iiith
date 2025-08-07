// Loads dataset, populates UI, and checks answers
fetch("json/aes-dataset.json")
  .then((res) => res.json())
  .then((data) => {
    window.aesCases = data;
    const select = document.getElementById("caseSelect");
    data.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${c.mode} | Key: ${c.keySize} | "${c.plaintext}"`;
      select.appendChild(opt);
    });

    select.addEventListener("change", showCaseDetails);
    showCaseDetails();

    // Add event listeners for all 'Check your answer' buttons
    document.getElementById("correctKeySize").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document.getElementById("userKeySize").value.trim();
      const inputField = document.getElementById("userKeySize");
      const resultDiv = document.getElementById("keySizeResult");

      if (user == c.keySize.toString()) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        inputField.style.borderColor = "#28a745";
        inputField.style.color = "";
      } else {
        resultDiv.textContent = `Incorrect! The correct answer is - '${c.keySize}'`;
        resultDiv.style.color = "red";
        inputField.style.borderColor = "red";
        inputField.style.color = "red";
      }
    };
    document.getElementById("correctMode").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userMode")
        .value.trim()
        .toUpperCase();
      const inputField = document.getElementById("userMode");
      const resultDiv = document.getElementById("modeResult");

      if (user === c.mode.toUpperCase()) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        inputField.style.borderColor = "#28a745";
        inputField.style.color = "";
      } else {
        resultDiv.textContent = `Incorrect! The correct answer is - '${c.mode}'`;
        resultDiv.style.color = "red";
        inputField.style.borderColor = "red";
        inputField.style.color = "red";
      }
    };
    document.getElementById("correctKey").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userKey")
        .value.trim()
        .toLowerCase();
      const inputField = document.getElementById("userKey");
      const resultDiv = document.getElementById("keyResult");

      if (user === c.key.toLowerCase()) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        inputField.style.borderColor = "#28a745";
        inputField.style.color = "";
      } else {
        resultDiv.textContent = `Incorrect! The correct answer is - '${c.key}'`;
        resultDiv.style.color = "red";
        inputField.style.borderColor = "red";
        inputField.style.color = "red";
      }
    };
    if (document.getElementById("correctIV")) {
      document.getElementById("correctIV").onclick = function () {
        const idx = select.value;
        const c = window.aesCases[idx];
        const user = document
          .getElementById("userIV")
          .value.trim()
          .toLowerCase();
        const inputField = document.getElementById("userIV");
        const resultDiv = document.getElementById("ivResult");

        if ((c.iv || "") === "") {
          resultDiv.textContent = "Not required for this mode.";
          resultDiv.style.color = "gray";
          inputField.style.borderColor = "";
          inputField.style.color = "";
        } else if (user === c.iv.toLowerCase()) {
          resultDiv.textContent = "Correct!";
          resultDiv.style.color = "green";
          inputField.style.borderColor = "#28a745";
          inputField.style.color = "";
        } else {
          resultDiv.textContent = `Incorrect! The correct answer is - '${c.iv}'`;
          resultDiv.style.color = "red";
          inputField.style.borderColor = "red";
          inputField.style.color = "red";
        }
      };
    }
    if (document.getElementById("correctCTR")) {
      document.getElementById("correctCTR").onclick = function () {
        const idx = select.value;
        const c = window.aesCases[idx];
        const user = document
          .getElementById("userCTR")
          .value.trim()
          .toLowerCase();
        const inputField = document.getElementById("userCTR");
        const resultDiv = document.getElementById("ctrResult");

        if ((c.ctr || "") === "") {
          resultDiv.textContent = "Not required for this mode.";
          resultDiv.style.color = "gray";
          inputField.style.borderColor = "";
          inputField.style.color = "";
        } else if (user === c.ctr.toLowerCase()) {
          resultDiv.textContent = "Correct!";
          resultDiv.style.color = "green";
          inputField.style.borderColor = "#28a745";
          inputField.style.color = "";
        } else {
          resultDiv.textContent = `Incorrect! The correct answer is - '${c.ctr}'`;
          resultDiv.style.color = "red";
          inputField.style.borderColor = "red";
          inputField.style.color = "red";
        }
      };
    }
    document.getElementById("correctPlaintext").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document.getElementById("userPlaintext").value.trim();
      const inputField = document.getElementById("userPlaintext");
      const resultDiv = document.getElementById("plaintextResult");

      if (user === c.plaintext) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        inputField.style.borderColor = "#28a745";
        inputField.style.color = "";
      } else {
        resultDiv.textContent = `Incorrect! The correct answer is - '${c.plaintext}'`;
        resultDiv.style.color = "red";
        inputField.style.borderColor = "red";
        inputField.style.color = "red";
      }
    };
    document.getElementById("correctPlaintextHex").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userPlaintextHex")
        .value.trim()
        .toLowerCase();
      const inputField = document.getElementById("userPlaintextHex");
      const resultDiv = document.getElementById("plaintextHexResult");

      if (user === c.paddedPlaintextHex.toLowerCase()) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        inputField.style.borderColor = "#28a745";
        inputField.style.color = "";
      } else {
        resultDiv.textContent = `Incorrect! The correct answer is - '${c.paddedPlaintextHex}'`;
        resultDiv.style.color = "red";
        inputField.style.borderColor = "red";
        inputField.style.color = "red";
      }
    };
    document.getElementById("correctCipher").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userCipher")
        .value.trim()
        .toLowerCase();
      const inputField = document.getElementById("userCipher");
      const resultDiv = document.getElementById("result");

      if (user === c.ciphertextHex.toLowerCase()) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
        inputField.style.borderColor = "#28a745";
        inputField.style.color = "";
      } else {
        resultDiv.textContent = `Incorrect! The correct answer is - '${c.ciphertextHex}'`;
        resultDiv.style.color = "red";
        inputField.style.borderColor = "red";
        inputField.style.color = "red";
      }
    };
  });

function showCaseDetails() {
  const idx = document.getElementById("caseSelect").value;
  const c = window.aesCases[idx];
  let html = `<b>Plaintext:</b> ${c.plaintext}<br>`;
  html += `<b>Key (hex):</b> ${c.key}<br>`;
  if (c.iv) html += `<b>IV (hex):</b> ${c.iv}<br>`;
  html += `<b>Mode:</b> ${c.mode}<br>`;
  html += `<b>Key Size:</b> ${c.keySize}<br>`;
  document.getElementById("caseDetails").innerHTML = html;

  // Clear all input boxes when a new test case is selected
  clearAllInputs();
}

function clearAllInputs() {
  // Clear all input fields
  const inputFields = [
    "userKeySize",
    "userMode",
    "userKey",
    "userIV",
    "userCTR",
    "userPlaintext",
    "userPlaintextHex",
    "userCipher",
  ];

  inputFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.value = "";
      // Reset input field styling
      field.style.borderColor = "";
      field.style.color = "";
    }
  });

  // Clear all result divs
  const resultDivs = [
    "keySizeResult",
    "modeResult",
    "keyResult",
    "ivResult",
    "ctrResult",
    "plaintextResult",
    "plaintextHexResult",
    "result",
  ];

  resultDivs.forEach((divId) => {
    const div = document.getElementById(divId);
    if (div) {
      div.textContent = "";
      div.style.color = "";
    }
  });

  // Clear notification area
  const notification = document.getElementById("notification");
  if (notification) {
    notification.textContent = "";
    notification.style.background = "";
    notification.style.color = "";
  }
}

document.getElementById("checkBtn").onclick = function () {
  const idx = document.getElementById("caseSelect").value;
  const c = window.aesCases[idx];
  const user = document.getElementById("userCipher").value.trim().toLowerCase();
  const inputField = document.getElementById("userCipher");
  const resultDiv = document.getElementById("result");

  if (!user) {
    resultDiv.textContent = "Please enter your ciphertext.";
    resultDiv.style.color = "red";
    inputField.style.borderColor = "red";
    return;
  }

  if (user === c.ciphertextHex.toLowerCase()) {
    resultDiv.textContent = "Correct!";
    resultDiv.style.color = "green";
    inputField.style.borderColor = "#28a745";
    inputField.style.color = "";
  } else {
    resultDiv.textContent = `Incorrect! The correct answer is - '${c.ciphertextHex}'`;
    resultDiv.style.color = "red";
    inputField.style.borderColor = "red";
    inputField.style.color = "red";
  }
};
