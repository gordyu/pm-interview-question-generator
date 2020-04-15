const express = require('express');
const app = express();
const port = process.env.PORT || 8583;
const data = {
  "product":["leggings","a bag to carry work equipment","a wallet","a travel hand sanitizer","a hat","a card game","a TV remote","an app","an automobile modification","a personal camcorder","a personal alarm","an exercise program"],

  "customer":["blind people","wheelchair-bound people","police officers","emergency room nurses","truck drivers","door-to-door salespeople","children under the age of 10","Twitch streamers",
  "professional wrestlers","an Olympic rowing team","SCUBA divers","bicycle couriers","oil rig workers"],
  
  "amazon":["customer obsession","ownership","invent and simplify","are right, a lot","learn and be curious","hire and develop the best","insist on the highest standards","think big","bias for action",
  "frugality","earn trust","dive deep","have backbone; disagree and commit","deliver results"],
  
  "facebook":["employee net promoter score","retention of most valued employees","customer net promoter score","customer retention","number of closed tickets","content load time","ticket resolution time","advertising revenue","user revenue","gross margin but not net margin","net margin but not gross margin","customer expansion","cost of customer acquisition","on-schedule product delivery"],
  
  "microsoft":["recursion","tree data structures","linked lists","big O","multithreading","waterfall methodology","agile methodology","API","SDK"],
  
  "google":["homelessness in","housing costs in","political bias in","traffic in","violent crime in","income inequality in","net migration away from"],
  
  "facebookPercent":[10,15,20,25,30,35],
  
  "facebookPerson":["Mark Zuckerberg","Sheryl Sandberg","Peter Thiel"],
  
  "microsoftPerson":["a 7-year-old child","my grandmother","the office cleaning lady"]
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