const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gyunit:GreatGPA10mg@cluster0-pdp9t.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

mongoose.Promise = global.Promise;

const yellReviewSchema = new mongoose.Schema({
  id: Number,
  photoID: String,
  gender: String,
  username: String,
  cityState: String,
  numFriends: Number,
  numReviews: Number,
  numPhotos: Number,
  date: String,
  numUseful: Number,
  numFunny: Number,
  numCool: Number,
  numVotes: Number,
  reviewScore: Number,
  reviewText: String
}); 

const yellReviews = mongoose.model('yellreviews', yellReviewSchema);

module.exports = db;
module.exports = yellReviews;