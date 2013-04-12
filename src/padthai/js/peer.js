define(function() {
     var DistPeer = function(id, peers) {
        if (!(this instanceof DistPeer)) return new DistPeer(id, peers);

        // Stores listeners per event.
        var events = {};

        // General event subscription, call listener on event type
        this.on = function(eventType, listener) {
            // If there's only one listener, no need to use an array.
            if (!events[eventType] ) {
                events[eventType] = listener;
            } else if (isArray(events[eventType])) {
                events[eventType].push(listener);
            } else {
                // Not an array, so it used to be a listener.
                events[eventType] = [events[eventType], listener];
            }
        };

        // EVENTS THAT SHOULD BE SUPPORTED:
        // join -> peerId
        // leave -> peerId
        // data -> peerId, message

        // Map of peer_id to DataConnection objects.
        var connections = {};

        var unregisterConnection = function(conn) {
            console.log("disconnect ", conn.peer);
            delete connections[conn.peer];
        };

        var registerConnection = function(conn) {
            connections[conn.peer] = conn;
            console.log("connection from", conn.peer);
            conn.on('data', function(message) {
                console.log(message);
            });
            conn.on('close', function() {
                unregisterConnection(conn);
            });
        };

        // Creates peer to peer connections.
        this.start = function() {
            console.log("starting peer", id);
            var peer = new Peer(id, {
                host: location.hostname,
                port: 9001
            });

            peer.on('connection', function(conn) {
                registerConnection(conn);
            });

            $.each(peers, function(i, id) {
                var conn = peer.connect(id);
                conn.on('open', function() {
                    registerConnection(conn);
                });
            });
        };

        this.send = function(message) {
            for (var peerId in connections) {
                if (connections.hasOwnProperty(peerId)) {
                    connections[peerId].send(message);
                }
            }
        };

    };

    return {
        DistPeer: DistPeer
    }
});
