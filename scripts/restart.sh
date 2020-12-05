#!/bin/bash

# Change the AppLocation as per your preferences
AppLocation='/home/ubuntu/webapp'

## Perform installation of deps and restart the application
pushd $AppLocation
    rm -rf node_modules
    npm install
    pm2 restart ecosystem.config.js --env production
popd