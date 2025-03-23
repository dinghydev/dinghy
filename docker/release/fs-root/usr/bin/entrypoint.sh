#!/bin/bash

# Make the script exit on any error
set -e

# Source bashrc to ensure environment is properly set up
source /root/.bashrc

cd /workspace

# Forward all arguments to the reactiac command
# The "$@" special parameter passes all arguments exactly as they were received
pnpm reactiac "$@"