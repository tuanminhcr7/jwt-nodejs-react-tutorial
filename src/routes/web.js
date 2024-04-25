import express from "express";
import homeController from '../controller/homeController';
import userController from '../controller/userController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloWorld);

    router.get('/user', userController.handleUserPage);
    router.post('/users/create-user', userController.handleCreateNewUser);

    return app.use("/", router);
}

export default initWebRoutes;