// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
//seed.js

var db = require("./models");
var controller = require('./controller');

var albumList =[
  // data here soon!
];

albumList = controller.album.albums;

db.Album.remove({}, function(err, album){
  // code in here runs after all albums are removed
  db.Album.create(albumList, function(err, album){
    // code in here runs after all albums are created
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", album);
    console.log("created", album.length, "albums");
    process.exit();
  });
});


