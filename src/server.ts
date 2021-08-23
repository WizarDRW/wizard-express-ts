import express from 'express'
import * as http from 'http';
import {CommonRouterConfig} from './routers/common'
import {LogRouter} from './routers/log.router'
import {ServiceRouter} from './routers/service.router'
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRouterConfig> = [];
const debugLog: debug.IDebugger = debug('app');


app.use(express.json());

routes.push(new LogRouter(app));
routes.push(new ServiceRouter(app));


server.listen(port, () => {
    routes.forEach((route: CommonRouterConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(`🚀 Server running on port ${port}!`)
});