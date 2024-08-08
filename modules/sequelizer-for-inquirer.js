
const { User, Score } = require('../db/models');

const createUser = async (name, age, login, password) => {
    try {
        const FindUser = await User.findAll({where: {login}})
        if(FindUser[0]) {console.log('такое имя уже есть!'); throw 1;}
        console.log(FindUser)
        const newUser = await User.create({name, age, login, password})
        const newScore = await Score.create({userId: newUser.dataValues.id})
} catch (error) {
    console.log(error);
}} 

module.exports = createUser