package apiserver

import "github.com/Kentabr5427/http-rest-api/internal/app/store"

//config...
type Config struct {
	BindAddr string `toml:"bind_addr"`
	LogLevel string `toml:"log_level"`
	Store    *store.Config
}

//NewConfig...
func NewConfig() *Config {
	return &Config{
		BindAddr: ":8080",
		LogLevel: "debug",
		Store:    store.NewConfig(),
	}
}