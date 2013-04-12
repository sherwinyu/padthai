define(function() {
    // Front-end DOM manipulations.
    var Client = function(server) {
        if (!(this instanceof Client)) return new Client(server);
    };

    return {
        Client: Client
    }
});
