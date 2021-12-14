var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia');

/* GET home page. */
router.get('/', async function (req, res, next) {
  dados = await Noticia.find();
  res.json(dados);
});

router.get('/visualizar', async function (req, res, next) {
  dados = await Noticia.findById(req.query.id)
  res.json(dados);
});

router.get('/contador', async function (req, res, next) {
  json = await  Noticia.find(req.length).count();
  res.json({quantidade: json});
});

module.exports = router;

// var express = require('express');
// var router = express.Router();

// //router.use("/admin", require("../admin"))

// /* GET home page. */
// router.get('/', async function (req, res, next) {
//   json = {title: 'IFMS', subtitle: 'Instituto Federal de Mato Grosso do Sul'};
//   res.render('noticias/index', { title: json.title, subtitle: json.subtitle });
// });

// router.get('/visualizar', function (req, res, next) {
//   json = { 
//     title: 'IFMS', 
//     subtitle: 'Instituto Federal de Mato Grosso do Sul' 
//   };

//   res.render('noticias/visualizar', { title: json.title, subtitle: json.subtitle });
// });

// module.exports = router;