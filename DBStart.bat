docker build . -t  miras:database
docker run --name MiRasDB -p 1433:1433 -d miras:database
@echo off
pause
