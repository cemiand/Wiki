const S = require("sequelize");
const db = new S("postgres://localhost:5432/wiki", { logging: false });

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
      // allowNull: false,
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

Page.addHook("beforeValidate", generateUrlTitle);

function generateUrlTitle(page) {
  // console.log(title);
  if (page.title) {
    // Remueve todos los caracteres no-alfanuméricos
    // y hace a los espacios guiones bajos.
    return (page.urlTitle = page.title.replace(/\s+/g, "_").replace(/\W/g, ""));
  } else {
    // Generá de forma aleatoria un string de 5 caracteres
    return Math.random().toString(36).substring(2, 7);
  }
}

Page.prototype.createdPage = function () {
  return this.Page;
};

module.exports = {
  Page: Page,
  User: User,
  db: db,
};
