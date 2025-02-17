document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                // Forward typing - log the event
                console.log("Checking Forward Typing");
                // Automatically focus next input when the current one is filled
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                // Deletion - log the event
                console.log("Checking Deletion");
                if (input.value === "" && index > 0) {
                    // Focus previous input if current one is empty and backspace is pressed
                    inputs[index - 1].focus();
                } else {
                    input.value = "";  // Clear the value on backspace
                }
            }
        });
    });
});
