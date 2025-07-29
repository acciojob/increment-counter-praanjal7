const counterEl = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    // Add event listener on button
    incrementBtn.addEventListener("click", function () {
      // Get current value before incrementing
      const currentValue = parseInt(counterEl.textContent);

      // Show alert with un-incremented value
      alert("Current value before increment: " + currentValue);

      // Increment and update counter
      counterEl.textContent = currentValue + 1;
    });