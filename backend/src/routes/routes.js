

import { Router } from "express";
import artistsController from "../controllers/artistsController.js";
import songsController from "../controllers/songsController.js";

 const router=Router();

 router.get("/artists", artistsController.listar);
 router.get("/songs",songsController.listar  );



 export default router;