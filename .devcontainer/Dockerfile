FROM node:22.14.0-bookworm-slim

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    vim \
    openssh-client \
    ca-certificates \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm@10.6.3 \
    && mkdir -p /pnpm-store /workspaces \
    && SHELL=bash pnpm setup \
    && pnpm config set store-dir /pnpm-store --global

COPY . /workspaces

RUN cd /workspaces \
    && pnpm install --frozen-lockfile \
    && rm -rf /workspaces
    

# Set default shell to bash
SHELL ["/bin/bash", "-c"] 