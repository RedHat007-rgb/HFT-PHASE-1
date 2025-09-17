package main

import (
	"context"
	"log"

	"github.com/redis/go-redis/v9"
)

func NewRedisClient(redisUrl string) *redis.Client{
	 opt,err:=redis.ParseURL(redisUrl)
	 if err!=nil{
		log.Fatal("error connected to redis...")
	 }
	 client:=redis.NewClient(opt)
	
	if err:=client.Ping(context.Background()).Err();err!=nil{
		log.Fatalf("redis ping error",err)
	}

	return  client
}


func PublishMessage(client *redis.Client,channel string,payload []byte){
	if err:=client.Publish(context.Background(),channel,payload).Err(); err!=nil{
		log.Printf("redis publish error %v",err)
	}
}