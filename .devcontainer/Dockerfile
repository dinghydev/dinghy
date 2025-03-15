FROM node:22.14.0-bookworm-slim

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    vim \
    ca-certificates \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm@10.6.3 \
    && mkdir -p /pnpm-store /workspaces

COPY . /workspaces

RUN cd /workspaces \
    && pnpm install --frozen-lockfile --store-dir /pnpm-store \
    && rm -rf /workspaces
    

# Set default shell to bash
SHELL ["/bin/bash", "-c"] 