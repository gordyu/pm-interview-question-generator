const mongoose = require('mongoose');
require('dotenv').config(); //required for MONGDB_ATLAS_URI, but not for PORT!
mongoose.connect(process.env.MONGODB_ATLAS_URI, 
  { useNewUrlParser: true,
    useUnifiedTopology: true });
const db = mongoose.connection;
mongoose.Promise = global.Promise;

const awip2Schema = new mongoose.Schema({
  start: Date,
  rEmail: String,
  eGoogleId: String,
  eImageURL: String,
  eEmail: String,
  eName: String,
  eGivenName: String,
  eFamilyName: String,
  eResume: String,
  rETimely: Number,
  rGood: String,
  rImprove: String,
  rLevel: Number,
  rRecommend: Number,
  eRTimely: Number,
  ePerform: Number,
  eRPerform: Number,
  rFeedback: String
}); 

const awip2 = mongoose.model('awip2', awip2Schema);

module.exports = db;
module.exports = awip2;