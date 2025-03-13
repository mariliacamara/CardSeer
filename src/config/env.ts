import { z } from 'zod'

const schema = z.object({
  APP_PORT: z.coerce.number().default(7000),
  APP_NAME: z.string().default('NestJS API'),
  APP_DESCRIPTION: z.string().default('NestJS API Description'),
  APP_VERSION: z.string().default('1.0'),
  MONGO_URI: z.string().default('mongodb://localhost:27017/nestjs')
})

export const env = schema.parse(process.env)
