function copyCmd() {
  const text = document.getElementById("cmd").innerText;
  navigator.clipboard.writeText(text);
  }