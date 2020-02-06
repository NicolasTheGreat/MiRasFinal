docker exec -it MiRasDB bash -c "/opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U sa -P Test@12345 -i /dbbackups/Backup.sql"
docker cp MiRasDB:dbbackups/MiRas_backup.bak ./database/
docker stop MiRasDB
docker rm MiRasDB
docker rmi miras:database
pause