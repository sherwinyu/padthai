package controllers

import (
	"github.com/robfig/revel"
	"math/rand"
	"padthai/app/tracker"
	"strconv"
)

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
	tracker.AddPeer(padId, peerId)
	return c.RenderJson(peerId)
}

func (c Application) Peers(padId string) revel.Result {
	peers := tracker.GetPeers(padId)
	return c.RenderJson(peers)
}
