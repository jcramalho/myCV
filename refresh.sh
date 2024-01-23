#!/bin/bash
docker-compose down
cd CV
./makedocker.sh
cd ..
docker-compose up -d


