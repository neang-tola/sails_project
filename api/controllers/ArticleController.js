/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res, next) {
	  res.view();
  },

   create: function(req, res, next) {
    var user_data = {
                      'title': req.body.title,
                      'description': req.body.content,
                      'status': (req.body.publish == 1) ? true : false
                    };
     //Article.create(req.params.all(), function articleCreated(err, art) {
    Article.create(user_data, function articleCreated(err, art) {
      if (err)  return next(err);

      res.redirect('/show-article/'+ art.id);
    });
   },

   show: function(req, res, next) {
    /* var str_qry = 'SELECT ar.*, CONCAT(au.firstName, " ", au.lastName) AS author_name FROM article AS ar INNER JOIN author AS au ON au.id = ar.author_id ';
         str_qry += 'WHERE ar.id = '+ req.param('id');*/
     Article.findOne(req.param('id'), function foundArticle(err, art){
       if (err) return res.next(err);
       if (!art) return next();

       res.view({ article: art });
     });
   },

  index: function(req, res, next) {
    Article.find(function foundArticles (err, arts) {
      if(err) return next(err);
      //res.json(arts);
      res.view({ articles: arts });
    });
  },

  edit: function(req, res, next) {
    Article.findOne(req.param('id'), function foundArticle(err, art){
      if (err) return next(err);
      if (!art) return next();

      res.view({ article: art });
    });
  },

  update: function(req, res, next) {
    var user_data = {
      'title': req.body.title,
      'description': req.body.content,
      'status': (req.body.publish == 1) ? true : false
    };

    Article.update(req.body.art_id, user_data, function articleUpdated(err) {
      if (err){
        return res.redirect('/article-edit/'+ req.body.art_id);
      }

      res.redirect('/show-article/'+ req.body.art_id);
    });
  },

  destroy: function(req, res, next) {
    Article.destroy(req.param('id'), function articleDestroy(err) {
      if (err) return next(err);

      res.redirect('/');
    });
  }
};

