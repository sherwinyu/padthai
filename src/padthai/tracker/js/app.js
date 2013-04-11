console.log('Initializing Padthai');

// TODO: Generate somehow.
var PEER_ID = '123' + (new Date()).getTime();
console.log('PEER_ID:', PEER_ID);

var peer = new Peer(PEER_ID, {host: location.hostname, port: 9001});
peer.on('connection', function(conn) {
    conn.on('data', function(data) {
        console.log('Got data:', data);
    });
});

$(document).ready(function() {

$('.connect').click(function(e) {
    e.preventDefault();
    var peer_id = $('.peer-id').val();
    console.log('Connecting to', peer_id);
    var conn = peer.connect(peer_id);
    conn.on('open', function() {
        conn.send('Greetings from ' + PEER_ID + '!');
    });
});

});

console.log('Done.');
