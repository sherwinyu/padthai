padthai
=======

Peer-to-peer Etherpad over WebRTC

Requirements:
* NodeJS
* PeerServer
* Go
* Revel

You must have PeerServer running at the same time as the main web app. The
Makefile installs things and runs both for you:

    make setup
    make run
