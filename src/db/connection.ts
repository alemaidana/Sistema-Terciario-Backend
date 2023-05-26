import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api_isft220', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;