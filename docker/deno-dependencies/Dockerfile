ARG BASE_IMAGE='DENO_DEPENDENCIES_BASE_IMAGE_IS_REQUIRED'

FROM --platform=${BUILDPLATFORM} ${BASE_IMAGE}

COPY docker/deno-dependencies/fs-root /

RUN cd /reactiac && \
    deno run -A cache-installer.ts && \
    rm -f *.ts