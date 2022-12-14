require("dotenv").config();

module.exports = {
    dialect: "postgres",
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_UNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    define: {
        underscored: true,
        timestamps: true,
        freezeTableName: true
    }
}