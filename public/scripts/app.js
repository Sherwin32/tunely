/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var userAlbums = [];
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  // compile handlebars template
  var source = $('#album-template').html();
  var template = Handlebars.compile(source);
  // renderAlbum(sampleAlbums);
    // make a get request for all albums
  $.ajax({
    method: 'GET',
    url: '/api/album',
    success: handleSuccess,
    error: handleError
  });

  $('#create-album').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/album',
      data: $(this).serialize(),
      success: createSuccess,
      error: handleError
    })
  })


// this function takes a single album and renders it to the page
function renderAlbum(albumIn) {
    $('.panel-body').text('');
    var albumHtml = template({album: albumIn});
    $('.panel-body').append(albumHtml);
}

function createSuccess(json){
  console.log(json);
  userAlbums.push(json);
  renderAlbum(userAlbums);
}

function handleSuccess(json){
  userAlbums = json;
  renderAlbum(userAlbums);
}

function handleError(a,b,c){
  console.log(a,b,c);
}
});






