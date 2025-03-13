import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { env } from './config/env.js'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  const swaggerConfig = new DocumentBuilder()
    .setTitle(env.APP_NAME)
    .setDescription(env.APP_DESCRIPTION)
    .setVersion('1.0')
    .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, swaggerDocument)

  await app.listen(env.APP_PORT, '0.0.0.0')
}

bootstrap()
