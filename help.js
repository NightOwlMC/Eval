/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 18) {
      eval(prompt("Command?"));
  }
})
