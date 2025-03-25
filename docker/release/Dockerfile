ARG BASE_IMAGE='RELEASE_BASE_IMAGE_IS_REQUIRED'

FROM ${BASE_IMAGE}

COPY docker/release/fs-root /

RUN --mount=type=secret,id=npm,target=/root/.npmrc \
    . /root/.bashrc \
    && pnpm install
