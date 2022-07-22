import { Request, Response } from "express";

export class NameController {
  static async getName(req: Request, res: Response) {
    res.send("Hello World");
  }
}
