ARG BASE_IMAGE='DEPENDENCIES_BASE_IMAGE_IS_REQUIRED'

FROM ${BASE_IMAGE}

COPY docker/dependencies/fs-root /

RUN . /root/.bashrc \
    && pnpm install
