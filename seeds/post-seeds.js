const { Post } = require('../model');

const postData = [
    {
        title: "Why MVC is so important",
        post_content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data the View layer for design, and the Controller layer for application logic",
        user_id: 3
    },
    {
        title: "Authentication VS. authorization",
        post_content: "There is a difference between authentication and authorrization. Authentication means confirming your own identity, where as authorization means being allowed to the system.",
        user_id: 1
    },
    {
        title: "Object-Relational Mapping",
        post_content: "I have really loved learning about ORMs. It's really simplified the way i create queries in SQL!!!",
        user_id: 2

    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;