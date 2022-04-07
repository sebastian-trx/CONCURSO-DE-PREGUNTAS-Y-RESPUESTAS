const { Question, Category } = require("../db.js");

async function postCategory(req, res) {
  const { name } = req.body;

  const check = await Category.findOne({
    where: {
      name: name,
    },
  });

  if (check) res.json("Categoría ya existente prueba con otra");
  else {
    const category = {
      name
    };

    try {
      const newCategory = await Category.create(category);
      if (newCategory) res.json({ type: "success", data: category });
      else {
        res.json({ type: "failure", data: "Error en creación de la categoría" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

const categoryInfo = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const dbCategory = await Category.findByPk(id);
      dbCategory
        ? res.send({
            category: dbCategory,
          })
        : res.send(`No se ha encontrado la categoría con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allCategories = await Category.findAll({
      include: [
        {
          model: Question,
          attributes: ["questionTitle"],
        },
      ],
    });
    res.json(allCategories);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postCategory,
  categoryInfo,
};
