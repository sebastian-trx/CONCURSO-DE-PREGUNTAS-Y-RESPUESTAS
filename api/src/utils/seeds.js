const { seedCategory } = require("./seedCategory.js");
const { seedUser } = require("./seedUser.js");
const { seedQuestion } = require("./seedQuestion.js");

async function seeds() {
  await seedCategory();
  await seedUser();
  await seedQuestion()
}

module.exports = {
  seeds,
};
