import prismaClient from "../prisma";

type Item = {
  item: string;
  price: string;
};

class SaveItemService {
  async execute(itemData: Item) {
    const newItem = await prismaClient.item.create({
      data: {
        item: itemData.item,
        price: itemData.price,
      },
    });

    return newItem;
  }
}

export { SaveItemService };
