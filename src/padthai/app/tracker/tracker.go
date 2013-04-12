package tracker

import "fmt"

var (
	// Maps each padId to a list of peerIds
	allPeers = map[string][]string{}
)

func init() {
	go tracker()
}

func AddPeer(padId string, peerId string) {
    fmt.Printf("Peer %v has joined pad %v\n", peerId, padId)
	peers, ok := allPeers[padId]
	if !ok {
		peers = make([]string, 0)
	}
	peers = append(peers, peerId)
	allPeers[padId] = peers
}

func GetPeers(padId string) []string {
	peers, ok := allPeers[padId]
	if !ok {
		return make([]string, 0)
	}
	return peers
}

func tracker() {
	// We can run background stuff here!
}
