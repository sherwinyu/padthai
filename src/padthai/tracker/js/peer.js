define(function() {
    var createPeer = function(peer_id, peers) {
        console.log("CREATING A PEER", peer_id);
        var start = function() {
            console.log('starting peer', peer_id);
            console.log('here is where we connect', peers);
        }
        return {
            start: start
        }
    };

    return {
        createPeer: createPeer
    }
});
