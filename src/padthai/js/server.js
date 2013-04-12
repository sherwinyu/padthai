define(function() {
    // Bridges client and transport layer, handling data in an
    // application-specific manner.
    var Server = function(distPeer) {
        if (!(this instanceof Server)) return new Server(distPeer);

        // Register listeners on the peer.
        distPeer.on('data', function(senderId, message) {
            // TODO Handler for peer data.
            console.log("Received message", message, "from", senderId);
        });

        // etc for join, leave
    };

    return {
        Server: Server
    }
});
