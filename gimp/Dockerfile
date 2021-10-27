FROM lomigandtux/debian-x-base

RUN apt -y update && apt -y install \
    gimp \
    && rm -rf /var/lib/apt/lists/*

VOLUME /root/images
ENTRYPOINT [ "/usr/bin/gimp" ]
