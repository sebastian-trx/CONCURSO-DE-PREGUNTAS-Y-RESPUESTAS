const { User } = require("../db.js");

async function postUser(req, res) {
  const { nickName, password, score, admin } = req.body;

  const check = await User.findOne({
    where: {
      nickName: nickName,
    },
  });

  if (check) res.json("Usuario ya existente en la base de datos");
  else {
    const user = {
      nickName,
      password,
      score,
      admin,
    };

    try {
      const newUser = await User.create(user);
      if (newUser) res.json({ type: "success", data: user });
      else {
        res.json({ type: "failure", data: "Error en creación de usuario" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

async function putUser(req, res) {
  const { score, nickName } = req.body;
  console.log({ score, nickName });
  try {
    updateUserScore = { score };
    const userByNickName = await User.findOne({
      where: {
        nickName: nickName,
      },
    });
    userByNickName ? res.send(await userByNickName.update(updateUserScore))
      : res.send("No se ha podido actualizar el usuario");
  } catch (error) {
    console.log(error);
  }
}

const userInfo = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const dbUser = await User.findByPk(id);
      dbUser
        ? res.send({
            user: dbUser,
          })
        : res.send(`No se ha encontrado el usuario con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allUsers = await User.findAll({
      // attributos que quero mostrar
      attributes: ["nickName", "score"],
    });
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postUser,
  putUser,
  userInfo,
};
