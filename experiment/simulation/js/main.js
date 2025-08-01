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
      if (user == c.keySize.toString()) {
        document.getElementById("keySizeResult").textContent = "Correct!";
        document.getElementById("keySizeResult").style.color = "green";
      } else {
        document.getElementById(
          "keySizeResult"
        ).textContent = `Correct answer: ${c.keySize}`;
        document.getElementById("keySizeResult").style.color = "blue";
        document.getElementById("userKeySize").value = c.keySize;
      }
    };
    document.getElementById("correctMode").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userMode")
        .value.trim()
        .toUpperCase();
      if (user === c.mode.toUpperCase()) {
        document.getElementById("modeResult").textContent = "Correct!";
        document.getElementById("modeResult").style.color = "green";
      } else {
        document.getElementById(
          "modeResult"
        ).textContent = `Correct answer: ${c.mode}`;
        document.getElementById("modeResult").style.color = "blue";
        document.getElementById("userMode").value = c.mode;
      }
    };
    document.getElementById("correctKey").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userKey")
        .value.trim()
        .toLowerCase();
      if (user === c.key.toLowerCase()) {
        document.getElementById("keyResult").textContent = "Correct!";
        document.getElementById("keyResult").style.color = "green";
      } else {
        document.getElementById(
          "keyResult"
        ).textContent = `Correct answer: ${c.key}`;
        document.getElementById("keyResult").style.color = "blue";
        document.getElementById("userKey").value = c.key;
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
        if ((c.iv || "") === "") {
          document.getElementById("ivResult").textContent =
            "Not required for this mode.";
          document.getElementById("ivResult").style.color = "gray";
        } else if (user === c.iv.toLowerCase()) {
          document.getElementById("ivResult").textContent = "Correct!";
          document.getElementById("ivResult").style.color = "green";
        } else {
          document.getElementById(
            "ivResult"
          ).textContent = `Correct answer: ${c.iv}`;
          document.getElementById("ivResult").style.color = "blue";
          document.getElementById("userIV").value = c.iv;
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
        if ((c.ctr || "") === "") {
          document.getElementById("ctrResult").textContent =
            "Not required for this mode.";
          document.getElementById("ctrResult").style.color = "gray";
        } else if (user === c.ctr.toLowerCase()) {
          document.getElementById("ctrResult").textContent = "Correct!";
          document.getElementById("ctrResult").style.color = "green";
        } else {
          document.getElementById(
            "ctrResult"
          ).textContent = `Correct answer: ${c.ctr}`;
          document.getElementById("ctrResult").style.color = "blue";
          document.getElementById("userCTR").value = c.ctr;
        }
      };
    }
    document.getElementById("correctPlaintext").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document.getElementById("userPlaintext").value.trim();
      if (user === c.plaintext) {
        document.getElementById("plaintextResult").textContent = "Correct!";
        document.getElementById("plaintextResult").style.color = "green";
      } else {
        document.getElementById(
          "plaintextResult"
        ).textContent = `Correct answer: ${c.plaintext}`;
        document.getElementById("plaintextResult").style.color = "blue";
        document.getElementById("userPlaintext").value = c.plaintext;
      }
    };
    document.getElementById("correctPlaintextHex").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userPlaintextHex")
        .value.trim()
        .toLowerCase();
      if (user === c.paddedPlaintextHex.toLowerCase()) {
        document.getElementById("plaintextHexResult").textContent = "Correct!";
        document.getElementById("plaintextHexResult").style.color = "green";
      } else {
        document.getElementById(
          "plaintextHexResult"
        ).textContent = `Correct answer: ${c.paddedPlaintextHex}`;
        document.getElementById("plaintextHexResult").style.color = "blue";
        document.getElementById("userPlaintextHex").value =
          c.paddedPlaintextHex;
      }
    };
    document.getElementById("correctCipher").onclick = function () {
      const idx = select.value;
      const c = window.aesCases[idx];
      const user = document
        .getElementById("userCipher")
        .value.trim()
        .toLowerCase();
      if (user === c.ciphertextHex.toLowerCase()) {
        document.getElementById("result").textContent = "Correct!";
        document.getElementById("result").style.color = "green";
      } else {
        document.getElementById(
          "result"
        ).textContent = `Correct answer: ${c.ciphertextHex}`;
        document.getElementById("result").style.color = "blue";
        document.getElementById("userCipher").value = c.ciphertextHex;
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
  document.getElementById("userCipher").value = "";
  document.getElementById("result").textContent = "";
}

document.getElementById("checkBtn").onclick = function () {
  const idx = document.getElementById("caseSelect").value;
  const c = window.aesCases[idx];
  const user = document.getElementById("userCipher").value.trim().toLowerCase();
  if (!user) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Please enter your ciphertext.";
    resultDiv.style.color = "red";
    return;
  }
  if (user === c.ciphertextHex.toLowerCase()) {
    document.getElementById("result").textContent = "Correct!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = "Incorrect. Try again!";
    document.getElementById("result").style.color = "red";
  }
};
