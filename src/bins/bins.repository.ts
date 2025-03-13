import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'

import { Bin, BinDocument } from './schemas/bin.schema'

@Injectable()
export class BinsRepository {
  constructor(@InjectModel(Bin.name) private binModel: Model<BinDocument>) {}

  async findOne(binFilterQuery: FilterQuery<Bin>): Promise<Bin> {
    return this.binModel.findOne(binFilterQuery)
  }

  async find(binsFilterQuery: FilterQuery<Bin>): Promise<Bin[]> {
    return this.binModel.find(binsFilterQuery)
  }

  async create(bin: Bin): Promise<Bin> {
    const newBin = new this.binModel(bin)
    return newBin.save()
  }

  async findOneAndUpdate(
    binFilterQuery: FilterQuery<Bin>,
    bin: Partial<Bin>
  ): Promise<Bin> {
    return this.binModel.findOneAndUpdate(binFilterQuery, bin, { new: true })
  }
}
