//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const otpInputs = document.querySelectorAll(".code");

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            const value = event.target.value;
            if (value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                if (input.value === "" && index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });
    });
});
