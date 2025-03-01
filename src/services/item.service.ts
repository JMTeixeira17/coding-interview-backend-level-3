import * as itemRepository from '../repositories/item.repository'

interface ItemData {
  name: string;
  price: number;
}

export const getAllItems = async () => {
  return await itemRepository.getAllItems()
}

export const getItemById = async (id: number) => {
  return await itemRepository.getItemById(id)
}

export const createItem = async (data: ItemData) => {
  return await itemRepository.createItem(data)
}

export const updateItem = async (id: number, data: ItemData) => {
  return await itemRepository.updateItem(id, data)
}

export const deleteItem = async (id: number) => {
  return await itemRepository.deleteItem(id)
}
