var express = require('express');
var router = express.Router();
const axios = require('axios');
const myhost = "http://cv_data_server"

router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0,16)
  res.render('index', {d:d});
});

router.get('/courses', function(req, res, next) {
  axios.get(myhost + ':3000/courses')
    .then(function (response) {
      var d = new Date().toISOString().substring(0,16)
      res.render('courses', {courses: response.data, d:d});
  })
  .catch(function (error) {
    console.log("Erro ao pedir a lista de cursos: " + error);
  })
  .finally(function () {
    console.log("Pedido: Lista de cursos")
  });
});

router.get('/thesup', function(req, res, next) {
  axios.get(myhost + ':3000/thesup')
    .then(function (response) {
      var d = new Date().toISOString().substring(0,16)
      res.render('thesup', {supList: response.data, d:d});
  })
  .catch(function (error) {
    console.log("Erro ao pedir a lista de supervisões: " + error);
  })
  .finally(function () {
    console.log("Pedido: Lista de supervisões")
  });
});

router.get('/theexa', function(req, res, next) {
  axios.get(myhost + ':3000/theexa')
    .then(function (response) {
      var d = new Date().toISOString().substring(0,16)
      res.render('theexa', {juriList: response.data, d:d});
  })
  .catch(function (error) {
    console.log("Erro ao pedir a lista de júris: " + error);
  })
  .finally(function () {
    console.log("Pedido: Lista de júris")
  });
});

router.get('/comms', function(req, res, next) {
  axios.get(myhost + ':3000/comms')
    .then(function (response) {
      var d = new Date().toISOString().substring(0,16)
      res.render('comms', {commsList: response.data, d:d});
  })
  .catch(function (error) {
    console.log("Erro ao pedir a lista de comunicações: " + error);
  })
  .finally(function () {
    console.log("Pedido: Lista de comunicações")
  });
});

router.get('/pubs', function(req, res, next) {
  axios.get(myhost + ':3000/pubs')
    .then(function (response) {
      var d = new Date().toISOString().substring(0,16)
      res.render('pubs', {pubsList: response.data, d:d});
  })
  .catch(function (error) {
    console.log("Erro ao pedir a lista de publicações: " + error);
  })
  .finally(function () {
    console.log("Pedido: Lista de publicações")
  });
});

router.get('/projs', function(req, res, next) {
  axios.get(myhost + ':3000/projects')
    .then(function (response) {
      var d = new Date().toISOString().substring(0,16)
      res.render('projs', {projsList: response.data, d:d});
  })
  .catch(function (error) {
    console.log("Erro ao pedir a lista de projetos: " + error);
  })
  .finally(function () {
    console.log("Pedido: Lista de projetos")
  });
});


module.exports = router;
