const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../model');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at' ],
                include: {
                    model: User,
                    attributes: ['username'],
                }
            }, 
            {
                model: User,
                attributes: ['username'],
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        const hbsObj = {
            post: posts
        }
        // res.render('homepage', {
        //     posts,
        //     loggIn: req.session.loggIn
        // });
        res.render('homepage', hbsObj )
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "Post can not be found with this id"});
            return;
        }

        const post = dbPostData.get({ plain: true });

        res.render('single-post', {
            post,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;