import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { CreateBinDto } from './dto/create-bin.dto'
import { UpdateBinDto } from './dto/update-bin.dto'

import { Bin } from './schemas/bin.schema'
import { BinsService } from './bins.service'

@Controller('bins')
export class BinsController {
  constructor(private readonly binsService: BinsService) {}

  @Get(':binId')
  async getBin(@Param('binId') binId: string): Promise<Bin> {
    return this.binsService.getBinById(binId)
  }

  @Get()
  async getBins(): Promise<Bin[]> {
    return this.binsService.getBins()
  }

  @Post()
  async createBin(@Body() createBinDto: CreateBinDto): Promise<Bin> {
    return this.binsService.createBin(createBinDto)
  }

  @Patch(':binId')
  async updateBin(
    @Param('binId') binId: string,
    @Body() updateBinDto: UpdateBinDto
  ): Promise<Bin> {
    return this.binsService.updateBin(binId, updateBinDto)
  }
}
