const config = require("./config.json");
const style = require("./Greeter.css");

module.exports = function() {
  var greet = document.createElement('div');
  greet.id = "allen";
  greet.textContent = config.greetText;
  return greet;
};