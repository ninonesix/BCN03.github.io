var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '18120315', firstValue: '',secondValue: '', calculateValue: ''});
});

router.post('/', (req, res)=> {
  const first =  parseFloat(req.body.first);
  const second = parseFloat(req.body.second); 
  const final = calculate(req.body.MS,first,second);
  res.render('index', { title: '18120315', firstValue: first, secondValue: second, calculateValue: final });
});

function calculate(choice,first,second)
{
  var result = 0;
  switch(choice)
  {
    case '1':
      result = first + second;
      break;
    case '2':
      result = first - second;
      break;
    case '3':
      result = first * second;
      break;
    case '4':
      result = first / second;
      break;
  }
  return result;
}
module.exports = router;