const { User, Score } = require("../db/models");

const createUser = async (login, password) => {
  try {
    const FindUserDirty = await User.findAll({ where: { login } });

    const FindUserClean = FindUserDirty.map((item) =>
      item.get({ plain: true })
    );

    if (FindUserClean[0]) {
      throw new Error("Такой логин уже есть!");
    }
    const newUser = await User.create({ login, password });
    // console.log(`User id = ${newUser.dataValues.id}`); РАБОТАЕТ!

    const newScore = await Score.create({
      score: 0,
      userId: newUser.dataValues.id,
    });

    console.log(
      `createUser func. userId = ${newScore.userId}, scoreId = ${newScore.id}`
    );

    const result = [newScore.userId, newScore.id];

    return result;
  } catch (error) {
    console.log(error);
  }
};

const createScore = async (userId) => {
  try {
    const newScore = await Score.create({
      score: 0,
      userId,
    });

    console.log(`newScore = ${newScore}`);

    return newScore.id;
  } catch (error) {
    console.error(error);
  }
};

const writeScore = async (userId, scoreId, scoreQuantuty) => {
  return;
};

module.exports = { createUser, createScore, writeScore };
