import prismaClient from "../prisma";

type INewData = {
  item?: string;
  price?: string;
};

class UpdateItemService {
  async execute(id: string, newData: INewData) {
    const item = await prismaClient.item.update({
      where: {
        id: id,
      },

      data: {
        item: newData.item,
        price: newData.price,
      },
    });

    return item;
  }
}

export { UpdateItemService };