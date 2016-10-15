/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res, next){
	  User.find(function listUser(err, users){
	    if(err) return next(err);

      res.view('user/index', { users: users });
    });
  },

  hello: function (req, res, next){
    User.find({ firstName: 'sok'}).exec(function listUser(err, users){
      if(err) return next(err);

      res.view('user/index', { users: users });
    });
  }
};

