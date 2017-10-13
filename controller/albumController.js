var db = require('../models');

// controllers/albumsController.js
var albums = [{
  // _id: 132,
  artistName: 'Nine Inch Nails',
  name: 'The Downward Spiral',
  releaseDate: '1994, March 8',
  genres: [ 'industrial', 'industrial metal' ]
}, {
  // _id: 133,
  artistName: 'Metallica',
  name: 'Metallica',
  releaseDate: '1991, August 12',
  genres: [ 'heavy metal' ]
}, {
  // _id: 134,
  artistName: 'The Prodigy',
  name: 'Music for the Jilted Generation',
  releaseDate: '1994, July 4',
  genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
}, {
  // _id: 135,
  artistName: 'Johnny Cash',
  name: 'Unchained',
  releaseDate: '1996, November 5',
  genres: [ 'country', 'rock' ]
}];

function getAlbums(req, res){
    db.Album.find({}, function(err, success){
        if(err){return console.log(err);}
        res.json(success);
    })  
}

function create(req, res){
  var genresStr = req.body.genres;
  var genresArr = genresStr.split(',');

  var newAlbum = new db.Album({
    artistName: req.body.artistName,
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    genres: genresArr
  })


  newAlbum.save(function(err,success){
     if(err){return console.log(err);}
     res.json(success);
  })
}


module.exports = {
	albums: albums,
  getAlbums: getAlbums,
  create: create
  // show: show,
  // destroy: destroy,
  // update: update
};