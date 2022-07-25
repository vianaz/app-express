import { NameFactory } from "@factories/factoryName";

export class NameRepository {
  static getTableName(table: string) {
    const { query } = new NameFactory(table);

    return query.findMany();
  }
}
