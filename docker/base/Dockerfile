FROM node:22.14.0-bookworm-slim

# Set default shell to bash
# SHELL ["/bin/bash", "-c" ,"-l"]
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
WORKDIR /workspace

# Install essential dependencies
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    gpg \
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
    && mkdir -p /workspace \
    && SHELL=bash pnpm setup \
    && pnpm config set store-dir /root/.local/share/pnpm/store --global

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

#    install terraform https://developer.hashicorp.com/terraform/install
RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update \
    # && apt list -a terraform \
    && apt-get -y install terraform=1.11.2-1 \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# install aws provider
RUN mkdir -p /terraform \
    && cd /terraform \
    && printf "terraform {\nrequired_providers {\nmycloud = {\nsource  = \"aws\"\nversion = \"5.63.1\"\n}\n}\n}" > provider.tf \
    && terraform init
        