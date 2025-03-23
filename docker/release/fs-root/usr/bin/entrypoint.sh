#!/bin/bash

# Make the script exit on any error
set -e

# Source bashrc to ensure environment is properly set up
source /root/.bashrc

cd /workspace

# if first argument is pnpm, run it directly otherwise run it through reactiac
if [ "$1" = "pnpm" ]; then
  shift
  pnpm "$@"
else
  pnpm build
  pnpm reactiac "$@"
fi
