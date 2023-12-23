function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateYear(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let yearInput = document.querySelector("#user-year");
  let apiKey = "f060a71819e2tbf51f08f683o95b4c96";
  let prompt = `User instructions: Generate an event that happened in that year ${yearInput.value}`;
  let context =
    "You are a history expert and love to write about history. Your mission is to generate a historical event of maximum 2 lines in basic HTML. Make sure to follow the user instructions and always start the answer with the words In that year. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the answer";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${context}&key=${apiKey}`;

  let answerElement = document.querySelector("#answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `📖looking for the most incredible event of ${yearInput.value}`;

  axios.get(apiURL).then(displayAnswer);
}
let yearFormElement = document.querySelector("#year-generator-form");
yearFormElement.addEventListener("submit", generateYear);
