package controllers

import (
	"github.com/robfig/revel"
	"math/rand"
	"strconv"
)

type PeerId string

type Application struct {
	*revel.Controller
}

func (c Application) Index() revel.Result {
	return c.Render()
}

func (c Application) Pad(padId string) revel.Result {
	return c.Render(padId)
}

func (c Application) Join(padId string) revel.Result {
    peerId := strconv.FormatInt(rand.Int63(), 10)
	outMap := map[string]string{
		"peer_id": peerId,
	}
	return c.RenderJson(outMap)
}

func (c Application) Peers(padId string) revel.Result {
	peers := make([]string, 0)
	peers = append(peers, "123")
	return c.RenderJson(peers)
}
