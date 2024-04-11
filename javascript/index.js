// Windows on load function
window.onload = function () {
  // variable declaration
  var submitButton = document.querySelector(".submit");
  var contact = document.getElementById("contact-me");
  var mode = document.getElementById("mode");
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var react = document.getElementById("react");
  var figma = document.getElementById("figma");
  var python = document.getElementById("python");
  var github = document.getElementById("github");
  var linux = document.getElementById("linux");
  var shell = document.getElementById("shell");
  var vscode = document.getElementById("vscode");
  var git = document.getElementById("git");
  var linkedin = document.getElementById("linkedin");

  // Adding eventlistener for toggling between dark mode and light mode
  mode.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      mode.src = "images/night.png";
      html.src = "images/html-light.png";
      css.src = "images/css-light.png";
      js.src = "images/js-light.png";
      react.src = "images/react-light.png";
      python.src = "images/python-light.png";
      figma.src = "images/figma-light.png";
      linux.src = "images/linux-light.png";
      shell.src = "images/shell-light.png";
      github.src = "images/github-light.png";
      vscode.src = "images/vscode-light.png";
      git.src = "images/git-light.png";
      linkedin.src = "images/linkedin-light.png";
    } else {
      mode.src = "images/light.png";
      html.src = "images/html.png";
      css.src = "images/css.png";
      js.src = "images/js.png";
      react.src = "images/react.png";
      python.src = "images/python.png";
      figma.src = "images/figma.png";
      linux.src = "images/linux.png";
      shell.src = "images/shell.png";
      github.src = "images/github.png";
      vscode.src = "images/vscode.png";
      git.src = "images/git.png";
      linkedin.src = "images/linkedin.png";
    }
  });

  // Send button animations
  submitButton.onclick = function () {
    this.innerHTML = `<div class="load"></div>`;
    setTimeout(() => {
      this.innerHTML = "Sent";
      this.style.color = "#09ad0e";
    }, 2000);
    setTimeout(function () {
      clearInterval(blink);
      contact.style.background = "black";
    }, 1000);
  };
};
