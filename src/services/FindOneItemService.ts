import prismaClient from "../prisma";

class FindOneItemService {
  async execute(id: string) {
    const item = await prismaClient.item.findUnique({
      where: {
        id: id,
      },
    });

    return item;
  }
}

export { FindOneItemService };
