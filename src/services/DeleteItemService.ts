import prismaClient from "../prisma";

class DeleteItemService {
  async execute(id: string) {
    const item = await prismaClient.item.delete({
      where: {
        id: id,
      },
    });

    return item;
  }
}

export { DeleteItemService };
