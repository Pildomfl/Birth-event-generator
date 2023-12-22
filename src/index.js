function generateYear(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: "The answer will be here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let yearFormElement = document.querySelector("#year-generator-form");
yearFormElement.addEventListener("submit", generateYear);
