const { User } = require('../models');

const userData = [
    {
        username: "chaos",
        email: "chaos123@gmail.com",
        password: "hhhh"
    },
    {
        username: "heythere",
        email: "heythere@gmail.com",
        password: "heythere"
    },
    {
        username: "babe",
        email: "babe@gmail.com",
        password: "word3"
    },
    {
        username: "thot",
        email: "thot@gmail.com",
        password: "thotty"
    },
    {
        username: "james",
        email: "james@gmail.com",
        password: "pass"
    },
    {
        username: "okusa",
        email: "okusa@gmail.com",
        password: "okusa"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;