function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === "NukeEm") {
    // ✅ correct password
    window.location.href = "control_panel.html";
  } else {
    // ❌ wrong password
    window.location.href = "rickroll_wrong.html";
  }
}
