const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const data = {

};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, function() {
  console.log(`PM Interviews Against Humanity is listening on port ${port}`);
});

app.get('/random', function(req, res) {
  // redeclare vars if they have data already
  let terms = []; 
  let i = 0;
  for (let key in data) {
      i = (Math.floor(Math.random() * (data[key].length)));
      terms.push(data[key][i]);
  };
  res.send(terms);
});