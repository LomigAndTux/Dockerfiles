FROM alpine:latest

RUN apk update --no-cache && apk upgrade --no-cache

ENV HUGO_VERSION 0.88.1
ENV HUGO_SOURCE hugo_${HUGO_VERSION}_Linux-64bit

RUN apk add --no-cache py-pygments

ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_SOURCE}.tar.gz /usr/local
RUN tar xzf /usr/local/${HUGO_SOURCE}.tar.gz -C /usr/local/bin \
        && rm /usr/local/${HUGO_SOURCE}.tar.gz \
        && rm /usr/local/bin/README.md \
        && rm /usr/local/bin/LICENSE \
	    && addgroup -Sg 1000 hugo \
	    && adduser -SG hugo -u 1000 -h /src hugo

VOLUME /src
VOLUME /output

WORKDIR /src

EXPOSE 1313
