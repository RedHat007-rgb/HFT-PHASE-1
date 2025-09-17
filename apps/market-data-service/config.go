package main

import "os"

type Config struct{
	RedisUrl string 
	BinanceBaseUrl string
}


func getEnv(k,fallback string) string {
	if v,ok:=os.LookupEnv(k);ok{
		return v
	}
	return fallback
}
func LoadConfig() *Config{
	BinanceURl:=getEnv("BINANCE_WS","wss://stream.binance.com:9443/ws/btcusdt@ticker")
	return &Config{
		BinanceBaseUrl: BinanceURl,
		RedisUrl: getEnv("REDIS_URL","redis://localhost:6379"),	
	}
}