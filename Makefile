setup:
	@echo Setting GOPATH to `pwd`
	export GOPATH=`pwd`
	go get github.com/robfig/revel
	go build -o bin/revel github.com/robfig/revel/cmd
	npm install

peer:
	npm start

tracker:
	GOPATH=`pwd` ./bin/revel run padthai
