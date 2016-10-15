/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localMySQL',
  tableName: 'tbl_users',
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      size: 11,
      primaryKey: true
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    userEmail: {
      type: 'email',
      unique: true
    },
    userStatus: {
      type: 'string',
      defaultsTo: '111-222-3333'
    }
  }
};

