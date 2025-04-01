ARG BASE_IMAGE='DENO_BASE_IMAGE_IS_REQUIRED'

# https://hub.docker.com/layers/denoland/deno/debian-2.2.6/images/sha256-ac91d2033a2f010d621c1582b2cb749b5fa6241e0da56f4b1106433b0476c117
# https://docs.docker.com/reference/dockerfile/#automatic-platform-args-in-the-global-scope
FROM --platform=$BUILDPLATFORM ${BASE_IMAGE}

# Set default shell to bash
# SHELL ["/bin/bash", "-c" ,"-l"]
# ENTRYPOINT ["/usr/bin/entrypoint.sh"]
# WORKDIR /workspace

RUN echo 'Essential dependencies' \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    gpg \
    zip \
    unzip \
    vim \
    openssh-client \
    ca-certificates \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN echo 'Install awscli' \
    && apt-get update \
    && apt-get -y install --no-install-recommends \
    awscli \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm/deno
# RUN npm install -g pnpm@10.6.3 deno@2.2.5 \
#     && mkdir -p /workspace \
#     && SHELL=bash pnpm setup \
#     && pnpm config set store-dir /root/.local/share/pnpm/store --global

RUN echo 'Install docker' \
   && install -m 0755 -d /etc/apt/keyrings \
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

# https://developer.hashicorp.com/terraform/install
RUN echo 'Install terraform' \
   && curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update \
    # && apt list -a terraform \
    && apt-get -y install terraform=1.11.2-1 \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN echo 'Install terraform aws provider' \
   && mkdir -p /terraform \
    && cd /terraform \
    && printf "terraform {\nrequired_providers {\nmycloud = {\nsource  = \"aws\"\nversion = \"5.63.1\"\n}\n}\n}" > provider.tf \
    && terraform init
