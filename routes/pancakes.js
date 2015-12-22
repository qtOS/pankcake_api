var express = require('express');
var router = express.Router();
var model = require('../models/Pancake');

//error responder
function buildErrorResponder(err){
  return {
    message: err,
    status: 400,
    note: 'This reponse was genereated due to user error'
  };
};
function addMsgToSuccQue(obj, msg){
  var ret = obj;
  ret.message = msg;
  return ret;
}


/* GET Pancake listing. */
router.get('/', function(req, res, next) {
  res.find(function(err, pancakes){
    if (err) {
      res.json(buildErrorResponder(err));
    }else{
      res.json(pancakes)
    };
  });
});

router.get('/:id', function(req, res, next) {
  res.findById(function(err, pancake){
    if (err) {
      res.json(buildErrorResponder(err));
    }else{
      res.json(pancake)
    }
  })
});

router.post('/', function(req, res, next) {
  res.create(function(err, pancakes){
    if (err) {
      res.json(buildErrorResponder(err));
    }else{
      res.json(pancakes)
    }
  })
});

router.put('/:id', function(req, res, next) {
  res.findByIdAndUpdate(req.params.id, req.body, function(err, pancake){
    if (err) {
      res.json(buildErrorResponder(err));
    }else{
      res.json(addMsgToSuccQue(pancake, 'Your pancake was added.'));
    }
  })
});

router.patch('/:id', function(req, res, next) {
  res.findByIdAndUpdate(req.params.id, req.body, function(err, pancake){
    if (err) {
      res.json(buildErrorResponder(err));
    }else{
      res.json(addMsgToSuccQue(pancake, 'Your pancake was added.'));
    }
  })
});

router.delete('/:id', function(req, res, next) {
  res.findByIdAndRemoved(req.params.id, req.body, function(err, pancake){
    if (err) {
      res.json(buildErrorResponder(err));
    }else{
      res.json(addMsgToSuccQue(pancake, 'Your pancake was removed.'));
    }
  })
});


module.exports = router;
