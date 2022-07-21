import prisma from "@db/database";
import { PrismaClient } from "@prisma/client";

export class NameFactory {
  public query: any;

  constructor(table: string) {
    this.query = prisma[table];
  }
}
