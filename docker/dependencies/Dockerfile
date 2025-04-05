ARG BASE_IMAGE='DENO_DEPENDENCIES_BASE_IMAGE_IS_REQUIRED'

FROM --platform=${TARGETPLATFORM} ${BASE_IMAGE}

COPY docker/dependencies/fs-root /

RUN cd /reactiac && \
    echo 'export DENO_NO_UPDATE_CHECK=1' >> /root/.bashrc && \
    . /root/.bashrc && \
    deno run -A cache-installer.ts && \
    rm -f *.ts