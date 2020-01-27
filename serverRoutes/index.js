/*
  Apply all routes to the express server object here
*/
import catchAll from './catchAll';
import licenseData from '../data/licenses';
import licenses from '../controllers/licenses';

const data = {
  licenses: licenseData,
};
// create the controller for the licenses API
const controllers = {
  licenses: licenses(data.licenses),
};

export const serverRoutes = (server) => {
  // License API
  server.get('/api/licenses', controllers.licenses.getAll);
  /*
    route: /*
    Should be placed at the end of this function. This is the catch all route
    that is used to server side render the vue js SPA
  */
  catchAll(server);
};

export const dataRef = data;
