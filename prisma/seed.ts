import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const data = [{ teste: "teste" }, { teste: "teste2" }];

  prisma.teste.create({ data });
};

main()
  .catch((e) => console.log(e.message))
  .finally(() => prisma.$disconnect());
