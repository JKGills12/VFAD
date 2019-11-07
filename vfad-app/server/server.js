const express = require('express')
const upload = require('./upload')
const cors = require('cors')
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json())

/*  PASSPORT SETUP  */

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => {
  window.alert()
  res.send("Welcome " + req.query.username + "!!")
});
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  User.findById(id, function (err, user) {
    cb(err, user);
  });
});

/* MONGOOSE SETUP */

mongoose.connect('mongodb://localhost/MyDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String
});

const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

//================================================================================
// Host Database
const hostSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String },
  zip: { type: String, required: true }
});

const Host = mongoose.model("Host", hostSchema);
//===============================================================================



/* PASSPORT LOCAL AUTHENTICATION */

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username, "what is username");
    UserDetails.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));

// app.post('/',
//   passport.authenticate('local', { failureRedirect: '/error' },
//   function(req, res) {
//     // console.log(req.body, "req.body");
//     res.redirect('/success?username='+req.user.username);
//   }));

app.post('/api/login', (req, res) => {

  console.log(req.body, "req");
  res.redirect('/success?username=' + req.body.username);
});

app.get('/api/users', (req, res) => {
  UserDetails.find({}, (err, users) => {
    res.send(users);
  })
})

//================================================================================================
// Host Database Post
app.post('/api/host/signup', (req, res) => {
  console.log(req.body)
  Host.insertMany(req.body)
    .then(res => {
      console.log(res);
    })


  //code to save to DB


  // To send back to the client
  res.json({ msg: 'sucessss!!!!' })
})


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.post('/upload', upload)

app.listen(PORT, () => {
  console.log('Server started on ' + PORT)
})
