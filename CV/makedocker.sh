#!/bin/bash
docker build . --no-cache -t zzglider/jcr_cv_interface
docker push zzglider/jcr_cv_interface:latest
echo 'Terminado'
echo "Id da imagem no DHub: zzglider/jcr_cv_interface:latest"

