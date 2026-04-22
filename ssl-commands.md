# Comandos OpenSSL utilizados

## Generar clave privada
openssl genpkey -algorithm RSA -out server.key

## Generar certificado auto-firmado
openssl req -x509 -new -key server.key -out server.pem -days 365

## Nota
Los certificados generados están excluidos del repositorio por seguridad (.gitignore)
