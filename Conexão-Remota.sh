#!/bin/sh

echo "Servidor Aberto na porta 3306"
echo "Para acessar digite: http://192.168.0.30:3306"
python -m http.server 3306

