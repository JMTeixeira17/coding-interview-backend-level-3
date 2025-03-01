import { Request, ResponseToolkit } from '@hapi/hapi'
import * as itemService from '../services/item.service'
import { createItemSchema, updateItemSchema } from '../validations/item.validation'

export const getAllItems = async (request: Request, h: ResponseToolkit) => {
  try {
    const items = await itemService.getAllItems()
    return h.response(items).code(200)
  } catch (error) {
    console.error(error)
    return h.response({ error: 'Internal Server Error' }).code(500)
  }
}

export const getItemById = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = Number(request.params.id)
    const item = await itemService.getItemById(id)

    if (!item) {
      return h.response({ error: 'Item not found' }).code(404)
    }

    return h.response(item).code(200)
  } catch (error) {
    console.error(error)
    return h.response({ error: 'Internal Server Error' }).code(500)
  }
}

export const createItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const { error, value } = createItemSchema.validate(request.payload, { abortEarly: false })
    if (error) {
      return h.response({
        errors: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }))
      }).code(400)
    }
    const newItem = await itemService.createItem(value)
    return h.response(newItem).code(201)
  } catch (error) {
    console.error(error)
    return h.response({ error: 'Internal Server Error' }).code(500)
  }
}
export const updateItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = Number(request.params.id)
    const { error, value } = updateItemSchema.validate(request.payload, { abortEarly: false })

    if (error) {
      return h.response({
        errors: error.details.map(detail => ({
          field: detail.path[0],
          message: detail.message
        }))
      }).code(400)
    }

    const updatedItem = await itemService.updateItem(id, value)

    if (!updatedItem) {
      return h.response({ error: 'Item not found' }).code(404)
    }

    return h.response(updatedItem).code(200)
  } catch (err) {
    console.error(err)
    return h.response({ error: 'Internal Server Error' }).code(500)
  }
}

export const deleteItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = Number(request.params.id)
    const deleted = await itemService.deleteItem(id)

    if (!deleted) {
      return h.response({ error: 'Item not found' }).code(404)
    }

    return h.response().code(204)
  } catch (error) {
    console.error(error)
    return h.response({ error: 'Internal Server Error' }).code(500)
  }
}
