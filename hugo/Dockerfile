FROM fedora:latest

MAINTAINER Lomig & Tux <lomigandtux@gmail.com>

RUN dnf -y update && dnf clean all
RUN dnf -y install hugo python-pygments && dnf clean all
RUN useradd -ms /bin/bash lomig

VOLUME /src
VOLUME /output

USER lomig
WORKDIR /src

EXPOSE 1313
ENTRYPOINT [ "hugo" ]
CMD [ "--help" ]
