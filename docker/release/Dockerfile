ARG BASE_IMAGE='RELEASE_BASE_IMAGE_IS_REQUIRED'

FROM  --platform=$BUILDPLATFORM ${BASE_IMAGE}

COPY clients/cli /workspace

RUN --mount=type=secret,id=npm,target=/root/.npmrc \
    echo 'ReactIAC Cli' \
    && cd /workspace \
    # && deno install --lock=deno.lock --frozen=true
    && deno install --lock=deno.lock
