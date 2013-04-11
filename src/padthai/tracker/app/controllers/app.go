package controllers

import (
	"fmt"
	"github.com/robfig/revel"
)

type Application struct {
	*revel.Controller
}

func (c Application) Index() revel.Result {
	return c.Render()
}

func (c Application) Pad(id string) revel.Result {
	fmt.Println("PAD ID:", id)
	return c.Render(id)
}

func (c Application) Join(id string) revel.Result {
    peerId := "123"
    outMap := map[string]string {
        "peer_id": peerId,
    }
    return c.RenderJson(outMap)
}

func (c Application) Peers(id string) revel.Result {
    peers := make([]string, 0)
    peers = append(peers, "123")
    fmt.Println("GET PEERS", id)
    return c.RenderJson(peers)
}
