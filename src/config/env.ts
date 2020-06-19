import 'dotenv/config';

// dotenv.config();

const env = {
    app_name: process.env.APP_NAME || 'Hotel Management System',
    app_url: process.env.APP_URL,
    port: Number(process.env.PORT),
    redis_url: String(process.env.REDIS_URL),
    mongodb_uri: String(process.env.MONGODB_URI),
    node_env: process.env.NODE_ENV || 'development',
    salt_rounds: Number(process.env.SALT_ROUNDS) || 10,
    jwt_secret: String(process.env.JWT_SECRET),
    jwt_expiry: String(process.env.JWT_EXPIRY),
};

export default env;
