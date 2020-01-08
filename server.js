require('dotenv').config();
const express = require('express');
//const awip2 = require('./database/index.js');
const app = express();
const port = process.env.PORT;
const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const db = mongoose.connect('mongodb://localhost:27017/population');
const Schema = mongoose.Schema;
const peopleSchema = new Schema({
  first: { type: String },
  last: { type: String }
});
const People = mongoose.model('people', peopleSchema);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, function() {
  console.log(`AWIPByte is listening on port ${port}`);
});

/* GraphQL with Mongoose Setup */
const typeDefs = `
type Query {
  People: [PeopleObject]!
  Greeting: String
}
type PeopleObject {
  id: ID
  first: String!
  last: String!
}
type Mutation {
  createPerson(first: String!, last: String!): PeopleObject
  deletePerson(id: ID!): PeopleObject
}
`
const resolvers = {
  Query: {
    Greeting: () => `Hello World`,
    People: () => People.find({})
  },
  Mutation: {
    createPerson: async (parent, args) => {
      const newPerson = new People({
        first: args.first,
        last: args.last
      })
      const error = await newPerson.save()
      if (error) return error
      return newPerson
    },
    deletePerson: (parent, args) => {
      return new Promise( (resolve, reject) => {
        People.findOneAndDelete(args.id, function(err, result){
          if (err) return err;
          resolve (result);
        })
      })
    }
  }
}
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({port: 7002}, () => console.log(`GraphQL is running on port 7002`));

/* MongoDB routes */
/*
app.get('/login', (req, res) => {
  awip2.findOne({ rEmail : "gordon@advancingwomeninproduct.org" }, (err, result) => {
    if (err) {
      console.log('GET lowest rated triggered ERROR', err);
      callback(err, null);
    }
    // if (!result) { EMAIL NOT FOUND; STORE DATA IN PROPS FOR SCHEDULING MEETING }
    else {
      res.status(200).send(result);
      console.log('An interviewer has logged on');
    }
  });
});

app.get('/available', (req, res) => {
  awip2.find({ start : { $exists: true }, eEmail : { $exists: false }}, (err, result) => {
    if (err) {
      console.log('GET lowest rated triggered ERROR', err);
      callback(err, null);
    }
    if (!results.length) {
      console.log('Our apologies, no interview slots are currently available');
    } 
    else {
      res.status(200).send(result);
      console.log('One or more interviews were located');
    }
  });
});
*/

//app.get (interviewer's own meetings)

//app.post (interviewer can schedule more interviews)

//app.post (interviewee takes an interview spot)

/* React-Router routes */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/index', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/dashboard', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/meeting', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});