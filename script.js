SC.initialize({
    client_id: '7fd2715456d322ce77c136b25dab3d3d',
});

var button = '#searchButton';

$(document).ready(function() {
    $('#searchButton').click(function() {
        
        SC.get(
            '/tracks', 
            {q: genres,limit:50},
            function(tracks) {
                for (var i = 0; i < tracks.length; i++) {
                    var track = tracks[i].title;
                    $("#list").append("<li>" + track + "</li>");
                }
            }
        );
    });
});
