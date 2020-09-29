const S = require("sequelize");
const db = new S("postgres://localhost:5432/wiki");

//-- Page Model
class Page extends S.Model {}
Page.init(
  {
    title: {
      type: S.STRING,
    },
    urlTitle: {
      type: S.STRING,
    },
    content: {
      type: S.TEXT,
    },
    status: {
      type: S.ENUM("open", "closed"),
    },
  },
  { sequelize: db, modelName: "page" }
);

//-- User Model
class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = {
  Page: Page,
  User: User,
  db: db,
};
