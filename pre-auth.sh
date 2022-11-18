#!/bin/sh

openssl rand -base64 756 > ./custom-build/auth/mongodb-keyfile
chmod 400 ./custom-build/auth/mongodb-keyfile
