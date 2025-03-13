import { Injectable } from '@nestjs/common'
import { UpdateBinDto } from './dto/update-bin.dto'

import { Bin } from './schemas/bin.schema'
import { BinsRepository } from './bins.repository'
import { CreateBinDto } from './dto/create-bin.dto'

@Injectable()
export class BinsService {
  constructor(private readonly binsRepository: BinsRepository) {}

  async getBinById(binId: string): Promise<Bin> {
    return this.binsRepository.findOne({ _id: binId })
  }

  async getBins(): Promise<Bin[]> {
    return this.binsRepository.find({})
  }

  async createBin(bin: CreateBinDto): Promise<Bin> {
    return this.binsRepository.create(bin)
  }

  async updateBin(binId: string, binUpdates: UpdateBinDto): Promise<Bin> {
    return this.binsRepository.findOneAndUpdate({ _id: binId }, binUpdates)
  }
}
