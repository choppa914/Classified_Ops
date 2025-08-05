function validatePassword() {
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (passwordInput === "NukeEm") {
        // Correct password
        message.style.color = "lime";
        message.innerText = "Access Granted. Welcome Commander...";
        setTimeout(() => {
            window.location.href = "control_panel.html";
        }, 2000);
    } else {
        // Wrong password
        message.style.color = "red";
        let countdown = 10;
        message.innerText = `ACCESS DENIED. Initiating Abort Sequence...\nBetrayal Detected...\nSelf-destruct in ${countdown} seconds`;

        const interval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                message.innerText = `ACCESS DENIED. Initiating Abort Sequence...\nBetrayal Detected...\nSelf-destruct in ${countdown} seconds`;
            } else {
                clearInterval(interval);
                // Continuous beep (looped for effect)
                const beep = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
                beep.loop = true;
                beep.play();

                setTimeout(() => {
                    beep.pause();
                    window.location.href = "rickroll_wrong.html";
                }, 3000);
            }
        }, 1000);
    }
}
