module.exports = function(app) {
  const controller = require('../controller/user');

  app.post("/api/tutorial/user", controller.signUp);
  app.get("/api/tutorial/user", controller.getAllUsers);
  app.put("/api/tutorial/user/:userId", controller.updateUser);
  app.delete("/api/tutorial/user/:userId", controller.deleteUser);
};