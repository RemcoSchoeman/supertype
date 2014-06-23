package main

import (
	_ "encoding/json"
	_ "flag"
	_ "github.com/ReSc/fmt"
	"github.com/codegangsta/martini"
	_ "net/http/pprof"
	_ "os"
)

func main() {
	var m = martini.Classic()
	m.Run()
}
