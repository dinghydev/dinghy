ARG BASE_IMAGE='denoland/deno:debian-2.2.6'

FROM ${BASE_IMAGE}

COPY docker/dependencies/fs-root /

RUN cd /reactiac && \
    echo 'export DENO_NO_UPDATE_CHECK=1' >> /root/.bashrc && \
    . /root/.bashrc && \
    deno run -A cache-installer.ts && \
    rm -f *.ts