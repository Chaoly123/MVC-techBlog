const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "It's soo cool!!!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Gucc not Gucci"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Holla!!!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "For!!!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "A!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "What you talking"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "About?!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Bruh!!!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;