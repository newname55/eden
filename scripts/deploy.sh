
#!/bin/bash

set -euo pipefail

REMOTE="eden-deploy:/home/kubokuboben/clubeden-okayama.com/public_html/"

echo "Deploy EDEN to ${REMOTE}"

read -p "Type EDEN to continue: " CONFIRM

if [ "$CONFIRM" != "EDEN" ]; then

  echo "Cancelled."

  exit 1

fi

rsync -avz --delete \

  --exclude ".git/" \

  --exclude ".DS_Store" \

  --exclude "scripts/" \

  --exclude ".env" \

  ./ "$REMOTE"

echo "EDEN deploy done."

