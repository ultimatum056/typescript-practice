declare namespace NodeJS {
    interface ProcessEnv {
        MYSQL_DB: string;
        MYSQL_DB_HOST : string;
        MYSQL_DB_PORT : number;
        MYSQL_USER : string;
        MYSQL_PASS : string;
    }
}