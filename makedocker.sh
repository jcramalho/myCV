#!/bin/bash
docker build . --no-cache -t zzglider/jcr_cv
docker push zzglider/jcr_cv:latest
echo 'Terminado'
echo "Id da imagem no DHub: zzglider/jcr_cv:latest"

