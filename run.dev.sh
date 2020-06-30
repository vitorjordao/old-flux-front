docker volume create --name nodemodules-flux-front-dev
docker volume remove nodemodules-flux-front-dev
docker volume create --name nodemodules-flux-front-dev-dashboard
docker volume remove nodemodules-flux-front-dev-dashboard

docker build -t flux-front-dev -f Dockerfile.dev .
docker run \
    -p 80:80 \
    -v `pwd`:/etc/nginx/ \
    -v nodemodules-flux-front-dev:/etc/nginx/node_modules \
    -v nodemodules-flux-front-dev-dashboard:/etc/nginx/Screens/Dashboard/node_modules \
    flux-front-dev