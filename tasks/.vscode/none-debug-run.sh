#!/bin/bash -e

# to prevent process hanging after all commands are executed
node -e "" 

export NODE_OPTIONS='' 
export VSCODE_INSPECTOR_OPTIONS=''

for arg in "$@"; do
  echo "Running: $arg"
  eval $arg
done
    