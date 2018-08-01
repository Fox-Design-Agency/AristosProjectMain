module.exports = app => {
  const pages = require("./routes/pages");
  const users = require("./routes/users");
  const aristosInfo = require("./routes/aristos-info");
  const expansions = require("./routes/expansions");
  const themes = require("./routes/themes");

  app.use("/expansions", expansions);
  app.use("/themes", themes);
  app.use("/aristos", aristosInfo);
  app.use("/users", users);
  app.use("/", pages);
};
