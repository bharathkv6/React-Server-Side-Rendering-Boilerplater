import path from 'path';
import dotenv from 'dotenv';

const envSelector = () => {
    const envConfig = dotenv.config({ path: path.resolve(__dirname, `env/.${process.env.NODE_ENV}`) });
    if (envConfig.error) {
        console.log(`Failed to load the configuration file for ${process.env.NODE_ENV} environment`);
        return;
    }
    const parsedConfig = envConfig.parsed;
    for (const key in parsedConfig) {
        process.env[key] = parsedConfig[key];
    }
    console.log(`Successfully loaded the configuration file for ${process.env.NODE_ENV} environment`);
}

export default envSelector;