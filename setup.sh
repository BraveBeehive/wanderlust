#!/bin/bash

# utility functions
function confirm_or_install_node
{
  if node -v; then
    echo 'Node is already installed.'
  else
    echo 'Installing Node via Brew...'
    brew install node
  fi
}
function confirm_or_install_mongo
{
  if mongod --version; then
    echo 'MongoDB is already installed.'
  else
    echo 'Installing MongoDB via Brew...'
    brew install mongoDB
  fi
}
function prepare_for_mongo
{
  # If /data/db doesn't exist, create it.
  if [ ! -d /data/db ]; then # ! -d not directory
    echo 'Creating /data/db for MongoDB to use...'
    sudo mkdir -p /data/db
    echo 'Giving '`whoami`' permission to use MongoDB with /data/db...'
    sudo chown `whoami` /data/db
  fi
  # If user doesn't have access to /data/db, get permission.
  # If mongod already running, kill it.
  mongoPort=$(ps -lA | grep 'mongo' | grep -v 'grep' | awk '{ print $2 }')
  if [ -n "$mongoPort" ] ; then # -n not null
    echo 'MongoDB is already running as PID #'$mongoPort'; restarting...'
    kill $mongoPort
  fi
}

# If no node, install via brew
confirm_or_install_node

# If no mongo, install via brew
confirm_or_install_mongo

# Start mongoDB.
prepare_for_mongo

# Install app and client dependencies.
npm install
bower install

# Start mongo in its own window.
osascript -e 'tell app "Terminal"
   do script "mongod"
end tell'

# Start server via grunt.
grunt serve
