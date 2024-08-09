const inquirer = require("inquirer").default;
const { createUser, createScore } = require("./sequelizer-for-inquirer");
const Game = require("../src/controllers/Game.js");
const { User, Score } = require("../db/models");

const RegPrompt = async () => {
  try {
    const logAndPass = await inquirer.prompt([
      { name: "login", type: "input", message: "Логин для регитсрации:" },
      {
        name: "password",
        type: "password",
        message: "Пароль для регистрации:",
        mask: "#",
      },
    ]); /// Enter login and password for registration

    const result = await createUser(logAndPass.login, logAndPass.password);

    console.log(`result from createUser func [a, b] = ${result}`);

    return result; // [userId, scoreId]
  } catch (error) {
    console.error(error);
  }
};

const LogPrompt = async () => {
  try {
    // console.log("Начало функции LogPrompt");

    const logAndPass = await inquirer.prompt([
      { name: "login", type: "input", message: "Логин для авторизации:" },
      {
        name: "password",
        type: "password",
        message: "Пароль для авторизации:",
        mask: "#",
      },
    ]); /// Enter login and password for authorisation

    // console.log(`logAndPass answer object = ${logAndPass}`);

    console.log("\x1b[8m"); // маскирует лишние логи

    const findUserByLoginDirty = await User.findAll({
      where: { login: logAndPass.login, password: logAndPass.password },
    });

    const findUserByLoginClean = findUserByLoginDirty.map((item) =>
      item.get({ plain: true })
    );

    // console.log(`User object after authorisation ${findUserByLoginClean}`);

    if (findUserByLoginClean[0]) {
      const newScore = await createScore(findUserByLoginClean[0].id);
      console.log(`New score id = ${newScore}`);

      console.log("\x1b[0m"); // демаскирует

      return [findUserByLoginClean[0].id, newScore]; // [userId, scoreId]
    } else {
      throw new Error("Вы ввели ошибочные логин и пароль!");
    }
  } catch (error) {
    console.error(error);
  }
};

const newScores = async (login, password) => {
  return;
};

const logRegPrompt = async () => {
  try {
    const result = await inquirer.prompt([
      {
        name: "isRegChoised",
        type: "list",
        message: "LynxWars 1.0.1",
        choices: [
          { name: "Вход", value: false },
          { name: "Регистрация", value: true },
        ],
      },
    ]);

    return result;
  } catch (error) {
    console.error(error);
    // Prompt couldn't be rendered in the current environment
  }

  await inquirer
    .prompt([
      {
        name: "isRegChoised",
        type: "list",
        message: "LynxWars 1.0.1",
        choices: [
          { name: "Вход", value: false },
          { name: "Регистрация", value: true },
        ],
      },
    ])

    .then((answer) => answer)

    .catch((error) => {
      console.error(error);
      // Prompt couldn't be rendered in the current environment
    });
};

const settingsPromt = async () => {
  try {
    return await inquirer
    .prompt([
      {
        name: "difficulty",
        type: "list",
        message: "Выберите сложность",
        choices: [
          { name: "Легко", value: 350 },
          { name: "Нормально", value: 300 },
          { name: "Сложно", value: 250 },
          { name: "Кошмар", value: 150 },
        ]
      }
    ])

    .then((answers) => {
      console.log();
    })
    .catch((error) => {

      console.log(error);
      // Prompt couldn't be rendered in the current environment
    };
  }

async function startinquirer() {

  try {
    const answer = await logRegPrompt();
    let result;

    if (answer.isRegChoised === true) {
      result = await RegPrompt();
      console.log(`Result from RegPrompt func [a, b] !!! = ${result}`);
    } else {
      result = await LogPrompt();
      console.log(`Result from LogPrompt func [a, b] !!! = ${result}`);
    }

    console.log(`myArgs in startinquirer func = ${result}`);

    return result;
  } catch (error) {
    console.error(error);
  }

}
// await settingsPromt();

module.exports = startinquirer;
