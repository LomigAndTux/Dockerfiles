FROM alpine:latest

RUN apk --no-cache update && apk --no-cache upgrade

WORKDIR /var/local

# combine into one run command to reduce image size
RUN apk --no-cache add perl wget fontconfig && \
    wget -qO- "https://yihui.name/gh/tinytex/tools/install-unx.sh" | sh
ENV PATH="${PATH}:/root/bin"
#RUN tlmgr install xetex
RUN fmtutil-sys --all

# install only the packages you need
# this is the bit which fails for most other methods of installation
