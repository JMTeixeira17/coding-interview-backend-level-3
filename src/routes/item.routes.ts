import { ServerRoute } from '@hapi/hapi'
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from '../controllers/item.controller';

const itemRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/items',
    handler: getAllItems,
  },
  {
    method: 'GET',
    path: '/items/{id}',
    handler: getItemById,
  },
  {
    method: 'POST',
    path: '/items',
    handler: createItem,
  },
  {
    method: 'PUT',
    path: '/items/{id}',
    handler: updateItem,
  },
  {
    method: 'DELETE',
    path: '/items/{id}',
    handler: deleteItem,
  },
]

export default itemRoutes
