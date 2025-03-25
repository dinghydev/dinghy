#!/bin/bash

# Make the script exit on any error
set -e

# Source bashrc to ensure environment is properly set up
source /root/.bashrc

cd /workspace

# if argments is empty, set it to "reactiac"
if [ -z "$1" ]; then
  pnpm exec reactiac --help
  exit 0
fi

# inspired by node:22.14.0-bookworm-slim:/usr/local/bin/docker-entrypoint.sh
# Run command with node if the first argument contains a "-" or is not a system command. The last
# part inside the "{}" is a workaround for the following bug in ash/dash:
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=874264
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ] || { [ -f "${1}" ] && ! [ -x "${1}" ]; }; then
  # pnpm run init
  set -- pnpm exec reactiac "$@"
fi

exec "$@"

