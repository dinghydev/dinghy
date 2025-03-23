FROM node:22.14.0-bookworm-slim

# Set default shell to bash
SHELL ["/bin/bash", "-c"] 

# Install essential dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    vim \
    less \
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

# Install docker
RUN install -m 0755 -d /etc/apt/keyrings \
    && curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\
    && chmod a+r /etc/apt/keyrings/docker.asc \
    && echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
        $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
        tee /etc/apt/sources.list.d/docker.list > /dev/null \
    && apt-get update \
    && apt-get -y install docker-ce-cli\
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm@10.6.3 \
    && mkdir -p /workspaces \
    && SHELL=bash pnpm setup \
    && pnpm config set store-dir /root/.local/share/pnpm/store --global

# Copy the project dependencies info to the container
COPY . /workspaces

# Install the project dependencies
RUN cd /workspaces \
    && source /root/.bashrc \
    && pnpm install --frozen-lockfile\
    && pnpm install -g @biomejs/biome@1.9.4 \
    && rm -rf /workspacesx