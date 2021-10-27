FROM lomigandtux/debian-x-base

RUN apt -y update && apt -y install \
    thunderbird-l10n-fr \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

VOLUME /root/.mozilla
ENTRYPOINT [ "/usr/bin/thunderbird" ]
