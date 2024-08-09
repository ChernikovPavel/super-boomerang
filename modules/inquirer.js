const inquirer = require('inquirer').default;
const createUser = require('./sequelizer-for-inquirer');
const Game = require('../src/controllers/Game.js');

const logRegPrompt = async () => {
  await inquirer
    .prompt([
      {
        name: "isRegChoised",
        type: "list",
        message: "lynxWars 0.0.1",
        choices: [
          { name: "Вход", value: false },
          { name: "Регистрация", value: true },
        ],
      },
      { name: 'name', type: 'type',message: 'введите ваше имя', when: ((answer) => {answer.isRegChoised === true})},
      { name: 'age', type: 'type', message: 'введите ваш возраст', when: ((answer) => {answer.isRegChoised === true})},
      { name: 'login', type: 'input', message: 'логин' },
      { name: 'password', type: 'password', message: 'пароль', mask: '*' },
    ]) ///name, age, login, password
    .then((answers) => {
      if (answers.isRegChoised) {
        if(createUser(answers.name, answers.age, answers.login, answers.password)){exit()};
      }
      //* answers =
      //* {
      //*   isRegChoised: false(или true),
      //*   login: "123",
      //*   password: "456",
      //* }
    })

    .catch((error) => {
      console.log(error);
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
  } catch(error) {
      console.log(error);
      // Prompt couldn't be rendered in the current environment
    };
  }

//> вызовы функций

async function startinquirer() {
  await logRegPrompt().then((rt) => {if(rt) {}});
  return await settingsPromt();
}
module.exports = startinquirer;
