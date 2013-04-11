setup:
	@echo Setting GOPATH to `pwd`
	export GOPATH=`pwd`
	go get github.com/robfig/revel
	go build -o bin/revel github.com/robfig/revel/cmd
	npm install

run:
	npm start > peer.log &
	./bin/revel run padthai/tracker
