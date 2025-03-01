import Hapi from '@hapi/hapi';
import { defineRoutes } from './routes/routes';
import prisma from './config/prisma';

const getServer = () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000,
    });

    defineRoutes(server);

    return server;
}

export const initializeServer = async () => {
    const server = getServer();

    if (process.env.NODE_ENV === 'test') {
        console.log("Running in test mode");
        await prisma.item.deleteMany({});
    }

    await server.initialize();
    return server;
}

export const startServer = async () => {
    const server = getServer();

    if (process.env.NODE_ENV === 'test') {
        console.log("Running in test mode");
        await prisma.item.deleteMany({});
    }

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
    return server;
};
