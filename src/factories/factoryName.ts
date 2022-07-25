import prisma from "@db/database";

export class NameFactory {
  public query: any;

  constructor(table: string) {
    this.query = prisma[table];
  }
}
