## To build

### Docker prod

```
docker build -t flux-front .
```

### Docker dev

```
docker-compose -f docker-compose.dev.yml build
```

## To run

### Docker prod

```
docker run -d -p 80:80 flux-front
```

### Docker dev

```
docker-compose -f docker-compose.dev.yml up
```

## To stop

### Docker prod

```
docker stop <PID>
```

### Docker dev

```
docker-compose -f docker-compose.dev.yml down
```
