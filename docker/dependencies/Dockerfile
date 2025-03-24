ARG BASE_IMAGE='313225491971.dkr.ecr.eu-west-1.amazonaws.com/test/cli:base'

FROM ${BASE_IMAGE}

COPY docker/dependencies/fs-root /

RUN . /root/.bashrc \
    && pnpm install
