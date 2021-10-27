FROM debian:sid
COPY apt.conf /etc/apt/apt.conf.d/00docker.conf

RUN apt -y update && apt -y install \
    adwaita-icon-theme \
    x11-common \
    x11-utils \
    dbus-user-session \
    dconf-service \
    systemd \
    fontconfig \
    #--no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

