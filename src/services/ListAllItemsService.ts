import prismaClient from "../prisma";

class ListAllItemsService {
  async execute() {
    const list = await prismaClient.item.findMany();

    return list;
  }
}

export { ListAllItemsService };
