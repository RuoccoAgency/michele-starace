import { app, setup } from "../server/index";

export default async (req: any, res: any) => {
    await setup;
    return app(req, res);
};
