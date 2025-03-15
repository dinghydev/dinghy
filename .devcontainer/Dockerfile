FROM node:22.14.0-bookworm-slim

# Set default shell to bash
SHELL ["/bin/bash", "-c"] 

# Install essential dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    vim \
    openssh-client \
    ca-certificates \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install awscli
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    awscli \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm@10.6.3 \
    && mkdir -p /pnpm-store /workspaces \
    && SHELL=bash pnpm setup \
    && pnpm config set store-dir /pnpm-store --global

# Copy the project dependencies info to the container
COPY . /workspaces

# Install the project dependencies
RUN cd /workspaces \
    && pnpm install --frozen-lockfile \
    && rm -rf /workspaces