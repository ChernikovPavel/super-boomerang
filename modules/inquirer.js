const inquirer = require("inquirer").default;
const { createUser, createScore } = require("./sequelizer-for-inquirer");
const Game = require("../src/controllers/Game.js");

const RegPrompt = async () => {
  try {
    const logAndPass = await inquirer.prompt([
      { name: "login", type: "input", message: "Логин для регитсрации" },
      {
        name: "password",
        type: "password",
        message: "Пароль для регистрации",
        mask: "*",
      },
    ]); /// Enter login and password for registration

    const result = await createUser(logAndPass.login, logAndPass.password);
    return result; // [userId, scoreId]
  } catch (error) {
    console.error(error);
  }
};

const LogPrompt = async () => {
  try {
    const logAndPass = await inquirer.prompt([
      { name: "login", type: "input", message: "Логин для авторизации" },
      {
        name: "password",
        type: "password",
        message: "Пароль для авторизации",
        mask: "*",
      },
    ]); /// Enter login and password for authorisation

    const findUserByLoginDirty = await User.findAll({
      where: { login: logAndPass.login, password: logAndPass.password },
    });

    const findUserByLoginClean = findUserByLoginDirty.map((item) =>
      item.get({ plain: true })
    );

    if (findUserByLoginClean[0]) {
      const newScore = await createScore(logAndPass.login, logAndPass.password);
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

// const settingsPromt = async () => {
//   await inquirer
//     .prompt([
//       {
//         name: "difficulty",
//         type: "list",
//         message: "Выберите сложность",
//         choices: [
//           { name: "Легко", value: 0 },
//           { name: "Нормально", value: 1 },
//           { name: "Сложно", value: 2 },
//           { name: "Кошмар", value: 3 },
//         ],
//       },
//       {
//         name: "skin",
//         type: "list",
//         message: "Выберите скин",
//         choices: [
//           { name: "1", value: 0 },
//           { name: "2", value: 1 },
//           { name: "3", value: 2 },
//           { name: "4", value: 3 },
//         ],
//       },
//     ])
//     .then((answers) => {
//       console.log();
//     })
//     .catch((error) => {
//       console.log(error);
//       // Prompt couldn't be rendered in the current environment
//     });
// };

async function startinquirer() {
  try {
    const answer = await logRegPrompt();

    if (answer.isRegChoised === true) {
      const result = await RegPrompt();
    } else {
      const result = await LogPrompt();
    }

    console.log(`myArgs = ${result}`);

    return result;
  } catch (error) {
    console.error(error);
  }
}
// await settingsPromt();

module.exports = startinquirer;
