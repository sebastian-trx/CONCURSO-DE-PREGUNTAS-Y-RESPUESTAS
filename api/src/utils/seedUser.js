const { User } = require("../db");

const adminUser = {
  nickName: "sebas123",
  password: "asd12345",
  admin: true,
};

async function seedUser() {
  try {
    await User.create(adminUser);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  seedUser,
};
