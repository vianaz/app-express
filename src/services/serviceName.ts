import { NameRepository } from "@repositories/repositoryName";

export class NameService {
  static getName() {
    return NameRepository.getTableName("name");
  }
}
