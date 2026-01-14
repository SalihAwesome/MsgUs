import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
    console.error('❌ DATABASE_URL is missing in environment variables');
}

const sequelize = dbUrl 
    ? new Sequelize(dbUrl, {
        dialect: 'mysql',
        logging: false,
        define: { timestamps: true },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
    : new Sequelize('support_chat', 'root', 'root', {
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
        define: { timestamps: true }
    });

export default sequelize;
