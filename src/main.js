const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Wow I am pretty epic huh?";

const tellPromise = tell(question);
//if the promise is fulfilled .then  if not .catch
tellPromise.catch(console.error).then((fortune) => {
  console.log(question);
  console.log(fortune);
});

welcome()
  .then(console.log) // Logs the result of welcome()

  .then(goodbye) // Returns promise from goodbye()

  .then(console.log) //Logs the result of goodbye()

  .catch(console.error);

welcome()
  .then((welcomeMessage) =>
    goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
  ) // welcomeMessage and goodbyeMessage combined.

  .then(console.log) // Logs combines messages
  .catch(console.error); // Logs error from welcome() or goodbye()

welcome()
  .then(console.log) // Logs the result of welcome()

  .then(tell) // Calls tell, which returns a rejected promise (no question supplied).

  .then(console.log) // Skipped because tell returned a rejected promise.

  .catch(console.error) // Logs error from tell() or welcome()

  .then(goodbye) // Returns promise from goodbye()

  .then(console.log) // Logs the result from goodbye()

  .catch(console.error); // Logs error only from goodbye()
