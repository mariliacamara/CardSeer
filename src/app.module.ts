import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { env } from './config/env.js'

import { BinsModule } from './bins/bins.module.js'

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URI), BinsModule]
})
export class AppModule {}
