import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 8800,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME || 'your_database',
  },
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
};

export default config;