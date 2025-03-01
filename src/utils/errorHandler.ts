import { ResponseToolkit } from '@hapi/hapi'

export const handleError = (
  h: ResponseToolkit,
  error: any,
  customMessage?: string,
  statusCode: number = 500
) => {
  console.error(error)
  const message = customMessage || 'Internal Server Error'
  return h.response({ error: message }).code(statusCode)
}
