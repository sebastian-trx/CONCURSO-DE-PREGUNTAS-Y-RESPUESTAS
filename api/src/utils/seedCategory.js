const { Category } = require("../db");

const categories = [
  {
  name: "Deportes"
},
  {
  name: "Historia"
},
  {
  name: "Geografía"
},
  {
  name: "Ciencia y Tecnología"
},
  {
  name: "Música"
},
];

async function seedCategory() {
  try {
    await Category.bulkCreate(categories);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  seedCategory,
};
