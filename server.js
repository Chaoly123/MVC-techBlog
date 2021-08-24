const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');
const path = require('path');

const exphbs = require('express-handlebars');

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'techblog',
  cookie: {
        // Session will automatically expire in 20 minutes
        expires: 20 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({
  defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});