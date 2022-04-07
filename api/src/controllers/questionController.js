const { Question, Category } = require("../db.js");

async function postQuestion(req, res) {
  const { questionTitle, answerOptions, level, categoryId } = req.body;

  const check = await Question.findOne({
    where: {
      questionTitle: questionTitle,
    },
  });

  if (check) res.json("Pregunta ya existente prueba con otra");
  else {
    const question = {
      questionTitle,
      answerOptions,
      level,
      categoryId
    };

    try {
      const newQuestion = await Question.create(question);
      if (newQuestion) res.json({ type: "success", data: question });
      else {
        res.json({ type: "failure", data: "Error en creación de la pregunta" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

const questionInfo = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const dbQuestion = await Question.findByPk(id);
      dbQuestion
        ? res.send({
            question: dbQuestion,
          })
        : res.send(`No se ha encontrado la pregunta con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allQuestions = await Question.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    res.json(allQuestions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postQuestion,
  questionInfo,
};
