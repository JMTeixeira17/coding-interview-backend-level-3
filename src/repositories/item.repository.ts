import prisma from '../config/prisma'

interface ItemData {
  name: string;
  price: number;
}

export const getAllItems = async () => {
  return await prisma.item.findMany()
}

export const getItemById = async (id: number) => {
  return await prisma.item.findUnique({
    where: { id }
  })
}

export const createItem = async (data: ItemData) => {
  return await prisma.item.create({
    data
  })
}

export const updateItem = async (id: number, data: ItemData) => {
  try {
    return await prisma.item.update({
      where: { id },
      data
    })
  } catch (error) {
    return null
  }
}

export const deleteItem = async (id: number) => {
  try {
    await prisma.item.delete({
      where: { id }
    })
    return true
  } catch (error) {
    return false
  }
}
