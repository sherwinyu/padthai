require.config({
    urlArgs: "t=" + (new Date()).getTime()
});

require([
    "jquery",
    "http://cdn.peerjs.com/0/peer.min.js",
    "peer",
    "channel",
    "editor"
], function($, _, peer, channel, editor) {
    var getPadId = function() {
        return location.pathname.substring(1);
    };
    // TODO GENERATE PEER ID
    $.post('join', function(peer_id) {
        $.get('peers', function(peers) {
            console.log("PEERS", peers);
            var p = peer.createPeer(peer_id, peers);
            p.start();
            var c = channel.createChannel(p);
            var e = editor.createEditor(c);
        });
    });
});
