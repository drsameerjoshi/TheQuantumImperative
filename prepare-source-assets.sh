#!/usr/bin/env sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
mkdir -p "$ROOT/source/client/public/assets"
rm -rf "$ROOT/source/client/public/assets/media"
cp -R "$ROOT/site/assets/media" "$ROOT/source/client/public/assets/media"
echo 'Source assets prepared.'
