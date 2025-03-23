ARG BASE_IMAGE='313225491971.dkr.ecr.eu-west-1.amazonaws.com/test/cli:base'

FROM ${BASE_IMAGE}

COPY docker/release/fs-root /

RUN --mount=type=secret,id=npm,target=/root/.npmrc \
    . /root/.bashrc \
    && cd /workspace \
    && pnpm install
