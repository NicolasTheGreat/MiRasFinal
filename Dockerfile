FROM mcr.microsoft.com/mssql/server:2017-latest
 
        ENV ACCEPT_EULA=Y
        ENV SA_PASSWORD=Test@12345
        ENV MSSQL_PID=Developer
        ENV MSSQL_TCP_PORT=1433 

        COPY database/ /dbbackups/
	
		
RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" && \
	/opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U sa -P Test@12345 -i /dbbackups/Restore.sql && \
	/opt/mssql-tools/bin/sqlcmd -S 127.0.0.1 -U sa -P Test@12345 -i /dbbackups/Logins.sql
        