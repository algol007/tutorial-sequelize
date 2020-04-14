const Users = require('../models').tb_user;

exports.signUp = (req, res, next) => {
  Users
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role_id: 1,
      image: "default.jpg"
    })
    .then(data => {
      res.status(201).send({
        message: "User has been created!",
        user: data
      })
    })
    .catch(error => {
      console.log(error)
    })
};

exports.getAllUsers = (req, res, next) => {
  Users.findAndCountAll()
    .then(data=>{
      res.status(200).send({
        users: data
      });
    })
    .catch(error => {
      error.status(500).json({
        message: `Error ${error}`
      });
    });
}

exports.updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const user = Users.findOne({
    id: userId
  });
  if(!user){
    res.status(404).json({
      message: 'User not found!'
    })
  } else {
    Users
      .update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        },{
        where: {
          id: userId
        }
      })
      .then(data => {
        res.status(200).send({
          message: "User has been updated!",
          user: data
        })
      })
      .catch(error => {
        error.status(500).json({
          message: `Error ${error}`
        });
      });  
  }
}

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  const user = Users.findOne({
    id: userId
  });
  Users
    .destroy({
      where: {
        id: userId
      }
    })
    .then(data => {
      res.status(200).send({
        message: "User has been deleted!",
        user: data
      })
    })
    .catch(error => {
      error.status(500).json({
        message: `Error ${error}`
      });
    });  
}