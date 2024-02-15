#!/bin/bash

HOME_DIR=$(dirname ~/)
CYPRESS_CACHE_DIR="$HOME_DIR/$(whoami)/.cache/Cypress"

COMMAND="--init --rm --user "$(id -u)":"$(id -g)" -v "$(pwd)":/app -v ""$CYPRESS_CACHE_DIR"":"/"$(id -u)"/.cache/Cypress" -w /app node:18"

{
  docker run $COMMAND "$@"
} 