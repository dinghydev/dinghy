ARG BASE_IMAGE='DENO_DEPENDENCIES_BASE_IMAGE_IS_REQUIRED'

FROM --platform=${TARGETPLATFORM} ${BASE_IMAGE}

COPY docker/dependencies/fs-root /

RUN cd /reactiac && \
    deno run -A cache-installer.ts && \
    rm -f *.ts