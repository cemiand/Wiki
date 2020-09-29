const S = require("sequelize");
const db = new S("postgres://localhost:5432/wiki");

//-- Page Model
class Page extends S.Model {}
Page.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    route: {
      type: S.VIRTUAL,
      get() {
        return "/wiki/" + this.getDataValue("urltitle");
      },
    },
    urlTitle: {
      type: S.STRING,
      allowNull: false,
    },
    content: {
      type: S.TEXT,
      allowNull: false,
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
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = {
  Page: Page,
  User: User,
  db: db,
};
