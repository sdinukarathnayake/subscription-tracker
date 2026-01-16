import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/view', (req, res) => res.send({ title : 'Get All Subscriptions'}));

export default subscriptionRouter;