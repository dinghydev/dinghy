ARG BASE_IMAGE='denoland/deno:debian-2.2.6'
ARG TERRAFORM_VERSION='1.11.3'
ARG TERRAFORM_AWS_PROVIDER_VERSION='5.94.1'

FROM ${BASE_IMAGE}
ARG TERRAFORM_VERSION
ARG TERRAFORM_AWS_PROVIDER_VERSION

# # https://developer.hashicorp.com/terraform/install
RUN echo 'Install terraform' \
   && curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update \
    # && apt list -a terraform \
    && apt-get -y install terraform=${TERRAFORM_VERSION} \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN echo 'Install terraform aws provider' \
   && mkdir -p /terraform \
    && cd /terraform \
    && printf "terraform {\nrequired_providers {\nmycloud = {\nsource  = \"aws\"\nversion = \"${TERRAFORM_AWS_PROVIDER_VERSION}\"\n}\n}\n}" > provider.tf \
    && terraform init


RUN echo 'Install aws cli' \
   && apt-get update \
    # && apt list -a awscli \
    && apt-get -y install awscli=2.9.19-1 \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

COPY docker/tf/fs-root /    