require.config({
    urlArgs: "t=" + (new Date()).getTime()
});

var sendMessage = function(){};

require([
    "jquery",
    "http://cdn.peerjs.com/0/peer.js",
    "peer",
    "server",
    "client"
], function($, _, peer, server, client) {
    var getPadId = function() {
        return location.pathname.substring(1);
    };
    $.post(location.href + '/join', function(peer_id) {
        $.get(location.href + '/peers', function(peers) {
            var p = new peer.DistPeer(peer_id, peers),
                s = new server.Server(p),
                c = new client.Client(s);
            p.start();
            // Just putting it in global scope to test.
            sendMessage = p.send;
        });
    });
});
