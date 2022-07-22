import { NameController } from "@controllers/controller";
import { Router } from "express";

export class NameRouter {
  public nameRouter: Router;
  constructor() {
    this.nameRouter = Router();

    this.buildRoutes();
  }

  private buildRoutes() {
    const { nameRouter } = this;

    nameRouter.get("/", NameController.getName);
  }
}
