#!/bin/bash

# Make the script exit on any error
set -e

# Source bashrc to ensure environment is properly set up
source /root/.bashrc
echo 'running from docker-entrypoint.sh'
# if [ -z "$APP_HOME" ]; then
#   echo "APP_HOME is required"
#   exit 1
# fi

# WORKING_DIR="$(dirname "$APP_HOME")"
# cd "$WORKING_DIR"
# # Loop through all files/folders in /workspace
# for item in /workspace/* /workspace/.*; do
#   # Get just the filename/foldername
#   base_name=$(basename "$item")
#   echo "base_name: $base_name"

#   # Skip the 'src' symlink and skip if item already exists in WORKING_DIR
#   if [ "$base_name" != "src" ] && [ ! -e "$WORKING_DIR/$base_name" ]; then
#     ln -s "$item" "$WORKING_DIR/$base_name"
#     echo "linked $item to $WORKING_DIR/$base_name"
#   fi
# done




if [ -z "$1" ]; then
  reactiac --help
  exit 0
fi


# inspired by node:22.14.0-bookworm-slim:/usr/local/bin/docker-entrypoint.sh
# Run command with node if the first argument contains a "-" or is not a system command. The last
# part inside the "{}" is a workaround for the following bug in ash/dash:
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=874264
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ] || { [ -f "${1}" ] && ! [ -x "${1}" ]; }; then
  # pnpm run init
  set -- reactiac "$@"
fi

exec "$@"

