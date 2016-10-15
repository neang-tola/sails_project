/**
 * Author.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      firstName: {
        type: 'string',
        required: true
      },
      lastName: {
        type: 'string',
        required: true
      },
      gender: {
        type: 'string',
        enum: ['m', 'f'],
        defaultsTo: 'm'
      },
      phone: {
        type: 'string'
      },
      email: {
        type: 'string',
        email: true
      },
     /* articles: {
        collection: 'article',
        via: 'author_id'
      }*/
  }
};

