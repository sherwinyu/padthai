padthai
=======

Peer-to-peer Etherpad over WebRTC

Requirements:
* NodeJS
* PeerServer
  * `npm install peer`
* Go
* Revel
  * `go get github.com/robfig/revel`
  * `go build -o bin/revel github.com/robfig/revel/cmd`

You must have PeerServer running at the same time as the main web app:
    npm start
    ./bin/revel run padthai/tracker
