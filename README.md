# rancher-docker-node

Express JS app build to run on RANCHER a docker management platform.

## DOCKERHUB

[![dockeri.co](http://dockeri.co/image/dmportella/expressjs)](https://hub.docker.com/r/dmportella/expressjs/)

## ExpressJs

Simple espress js site with route to simulate site failure.

Built for testing _kubernetes_ and _rancher_ instances.

### Normal route

Web site should be available on port `8080` when in docker if you are running the site individually it will be served on port `3000`.

### Health check

```
GET /__health
{
version: "1.0.0",
status: "OK"
}
```

#### routes

- Health check url.: `/__health/`
- Set to throw 500: `/__health/throw500`
- Set to time out: `/__health/timeout`
- Set kill the process: `/__health/killprocess`

## Building

The shell file `build.sh` will run npm install, install and run grunt and it will build and run the docker image.

> $ `./build.sh`

Builds docker image and tags it.

- It is important to take care the image version. You can append behind the `./build.sh`
- e.g. `./build.sh 0.0.1`

> $ `./build-image.sh`

- Installs npm and grunt

> $ `./setup.sh`
