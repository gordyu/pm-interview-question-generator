//const db = require('./index.js');
const awip2 = require('./index.js');
const sampleData = require('./data.js');

const seed = ()=> {
  awip2.create(sampleData, (err, result) => {
    if (err) console.log('Error with seeding database:', err);
  })
}

seed();