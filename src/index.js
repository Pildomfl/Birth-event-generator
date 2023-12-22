function displayAnswer(response) {
  console.log("answer generated");
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
  let apiKey = "f060a71819e2tbf51f08f683o95b4c96";
  let prompt = `User instructions:Generate an event that happened in ${instructionsInput.value}`;
  let context =
    "You are an history expert and love to write about history. your mission is to generate a historical event of 2 lines maximum in basic HTML. Make sure to follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating answer");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayAnswer);

  let yearFormElement = document.querySelector("#year-generator-form");
  yearFormElement.addEventListener("submit", generateYear);
}
