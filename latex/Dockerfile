FROM ubuntu:bionic

WORKDIR /var/local

# combine into one run command to reduce image size
RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y perl wget libfontconfig1 && \
    wget -qO- "https://yihui.name/gh/tinytex/tools/install-unx.sh" | sh  && \
    apt-get clean
ENV PATH="${PATH}:/root/bin"
RUN tlmgr install xetex
RUN fmtutil-sys --all

# install only the packages you need
# this is the bit which fails for most other methods of installation
