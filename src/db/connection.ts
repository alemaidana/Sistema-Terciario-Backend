import { Sequelize } from "sequelize";

const sequelize = new Sequelize('almacen', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
     /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default sequelize;