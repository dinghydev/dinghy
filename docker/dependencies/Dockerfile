ARG BASE_IMAGE='denoland/deno:debian-2.2.6'
ARG TF_IMAGE_VERSION='PLACEHOLDER'

FROM ${BASE_IMAGE}
ARG TF_IMAGE_VERSION

COPY docker/dependencies/fs-root /

RUN cd /reactiac && \
    echo 'export DENO_NO_UPDATE_CHECK=1' >> /root/.bashrc && \
    echo "TF_IMAGE_VERSION=${TF_IMAGE_VERSION}" >> /root/.reactiacrc && \
    . /root/.bashrc && \
    deno run -A cache-installer.ts && \
    rm -f *.ts