 const counterEl = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function () {
      const currentValue = parseInt(counterEl.textContent);

      // ✅ Alert only the number so Cypress test passes
      alert(currentValue);

      // ✅ Now increment and display updated value
      counterEl.textContent = currentValue + 1;
    });