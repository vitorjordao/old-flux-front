######################
# Build stage        #
# Name: user_service #
######################

FROM vitorjordao/nginx-node-npm-yarn:1.0

RUN rm /etc/nginx/conf.d/default.conf

COPY Design_Thinking /etc/nginx/Design_Thinking
COPY Screens /etc/nginx/Screens

COPY package.json /etc/nginx/
COPY gulpfile.js /etc/nginx/

COPY front.conf /etc/nginx/conf.d/

RUN cd /etc/nginx/ && \
    yarn && \
    yarn gulp && \
    nginx -t && \
    service nginx start && \
    nginx -s reload