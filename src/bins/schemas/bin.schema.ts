import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type BinDocument = Bin & Document

@Schema()
export class Bin {
  @Prop()
  bin: number

  @Prop()
  brand: string

  @Prop()
  type: string

  @Prop()
  category: string

  @Prop()
  issuer: string

  @Prop()
  issuerPhone: string

  @Prop()
  issuerWebsite: string

  @Prop()
  countryName: string

  @Prop()
  countryAlpha2: string

  @Prop()
  countryAlpha3: string
}

export const BinSchema = SchemaFactory.createForClass(Bin)
