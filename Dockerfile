#######################
# Build stage         #
# Name: front_service #
#######################

FROM vitorjordao/nginx-node-npm-yarn:1.0
LABEL maintainer="Vitor Jordão"

RUN rm /etc/nginx/conf.d/default.conf

COPY Design_Thinking /etc/nginx/Design_Thinking
COPY Screens /etc/nginx/Screens

COPY package.json /etc/nginx/
COPY gulpfile.js /etc/nginx/

COPY front.conf /etc/nginx/conf.d/

RUN cd /etc/nginx/ && \
    yarn && \
    yarn gulp && \
    cd Screens/Dashboard/ &&\
    yarn && \
    yarn build && \
    service nginx start && \
    nginx -t && \
    nginx -s reload