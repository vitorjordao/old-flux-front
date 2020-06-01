######################
# Build stage        #
# Name: user_service #
######################

FROM nginx:latest
MAINTAINER Vitor Jordão
LABEL maintainer="Vitor Jordão"

EXPOSE 80/tcp

RUN rm /etc/nginx/conf.d/default.conf

COPY Design_Thinking /etc/nginx/Design_Thinking
COPY Screens /etc/nginx/Screens
COPY front.conf /etc/nginx/conf.d/

RUN nginx -t && service nginx start && nginx -s reload