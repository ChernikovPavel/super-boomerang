const { underscoredIf } = require("sequelize/lib/utils");
const { User, Score } = require("../db/models");

const createUser = async (login, password) => {
  try {
    console.log("\x1b[8m"); // маскирует лишние логи

    const FindUserDirty = await User.findAll({ where: { login } });

    const FindUserClean = FindUserDirty.map((item) =>
      item.get({ plain: true })
    );

    console.log("\x1b[0m"); // демаскирует

    if (FindUserClean[0]) {
      throw new Error("Такой логин уже есть!");
    }

    console.log("\x1b[8m"); // маскирует лишние логи

    const newUser = await User.create({ login, password });

    const newScore = await Score.create({
      score: 0,
      userId: newUser.dataValues.id,
    });

    console.log("\x1b[0m"); // демаскирует

    // console.log(
    //   `createUser func. userId = ${newScore.userId}, scoreId = ${newScore.id}`
    // );

    const result = [newScore.userId, newScore.id];

    // console.log(`myArgs from createUser func [a, b] = ${result}`);

    return result;
  } catch (error) {
    console.log(error + "\n\nError in creating new User while registering");
  }
};

const createScore = async (userId) => {
  try {
    console.log("\x1b[8m"); // маскирует лишние логи

    const newScore = await Score.create({
      score: 0,
      userId,
    });

    console.log("\x1b[0m"); // демаскирует

    // console.log(`newScore = ${newScore}`);

    return newScore.id;
  } catch (error) {
    console.error(
      error + "\n\nError in creating new Score row in DB before begin the game"
    );
  }
};

const writeScore = async (scoreId, scoreQuantuty) => {
  try {
    console.log("\x1b[8m"); // маскирует лишние логи

    const writedScore = await Score.update(
      { score: scoreQuantuty },
      { where: { id: scoreId } }
    );

    // console.log("Score was updated in DB after gave over");

    console.log("\x1b[0m"); // демаскирует

    return;
  } catch (error) {
    console.error(error + "\n\nError in writing score after game to DB");
  }
};

const writeBestScore = async (userId) => {
  try {
    console.log("\x1b[8m"); // маскирует лишние логи

    const answerDirty = await Score.findAll({
      attributes: ["score"],
      where: { userId },
    });

    console.log("\x1b[0m"); // демаскирует

    const answerClear = answerDirty.map((item) => item.get({ plain: true })); // Массив объектов

    let max = 0;

    answerClear.forEach((scoreObj) => {
      if (scoreObj.score > max) max = scoreObj.score;
    });

    // console.log(`Ваш лучший результат - ${max} очков за игру!`);
    return max;
  } catch (error) {
    console.error(
      error + "\n\nError in writing best score after game to console"
    );
  }
};
const writeTotalScore = async (userId) => {
  try {
    console.log("\x1b[8m"); // маскирует лишние логи

    const answerDirty = await Score.findAll({
      attributes: ["score"],
      where: { userId },
    });

    console.log("\x1b[0m"); // демаскирует

    const answerClear = answerDirty.map((item) => item.get({ plain: true })); // Массив объектов

    let sum = 0;

    answerClear.forEach((scoreObj) => {
      sum += scoreObj.score;
    });

    // console.log(`\nСуммарно за все игры вы заработали ${sum} очков.`);
    return sum;
  } catch (error) {
    console.error(
      error + "\n\nError in writing best score after game to console"
    );
  }
};
const writeTopScoreResult = async () => {};

module.exports = {
  createUser,
  createScore,
  writeScore,
  writeBestScore,
  writeTotalScore,
  writeTopScoreResult,
};
