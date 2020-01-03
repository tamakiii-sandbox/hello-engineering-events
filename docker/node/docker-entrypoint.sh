#!/bin/sh
set -e

CMD=node

if [ "$1" == "$CMD" ]; then
  exec "$@"
elif [ "$(which $1)" ]; then
  exec "$@"
else
  exec $CMD "$@"
fi
