import { NameRepository } from "respositories/repository";

export class NameService {
  static getName() {
    return NameRepository.getTableName("name");
  }
}
