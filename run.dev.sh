echo START VOLUMES
docker volume create --name nodemodules-flux-front-dev
docker volume remove nodemodules-flux-front-dev
docker volume create --name nodemodules-flux-front-dev-dashboard
docker volume remove nodemodules-flux-front-dev-dashboard

echo START BUILD

docker build -t flux-front-dev -f Dockerfile.dev .

echo START RUN

docker run \
    -d \
    -p 80:80 \
    -v `pwd`/Design_Thinking:/etc/nginx/Design_Thinking \
    -v `pwd`/Screens/Dashboard:/etc/nginx/Screens/Dashboard \
    -v nodemodules-flux-front-dev:/etc/nginx/node_modules \
    -v nodemodules-flux-front-dev-dashboard:/etc/nginx/Screens/Dashboard/node_modules \
    flux-front-dev

echo END