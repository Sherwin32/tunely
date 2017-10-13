// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');
var controller = require('./controller');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 app.get('/api/album', controller.album.getAlbums);

 app.post('/api/album', controller.album.create);

app.get('/api', controller.api.sendAPI);

// app.get('/api/campsites', function(req, res) {
//     res.json(db.Campsite);
//     db.Campsite.find(function(err, site) {
//         console.log(site);
//     });
// });

// app.post('/api/team', function createTeam(req, res) {
//     console.log("got a post request");
//     var postTeam = {
//       name: req.body.name,
//       abbr: req.body.abbr,
//       nationality: req.body.nationality,
//       // coach: req.body.coach,
//       badgeUrl: req.body.badgeUrl
//     }

//     db.Team.create(postTeam, function(err, team){
//       if(err){return console.log(err);}
//       db.Team.find({},function(err,allTeam){
//         if(err){return console.log(err);}
//         res.json({data:allTeam});
//       })
//     })


// app.get('/api/profile', function apiIndex(req, res) {
//     // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
//     // It would be seriously overkill to save any of this to your database.
//     res.json({
//         'data': profile
//     });
// });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is up and running on http://localhost:3000/');
});