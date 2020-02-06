USE [master]
RESTORE DATABASE [MiRas] FROM  DISK = N'/dbbackups/MiRas_backup.bak' WITH  FILE = 1, MOVE N'MiRas' TO N'/dbbackups/MiRas_backup.mdf', MOVE N'MiRas_log' TO N'/dbbackups/MiRas_backup_log.mdf', NOUNLOAD, STATS = 5
GO


