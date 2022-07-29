import { Injectable } from '@nestjs/common';
import { Shoes } from '../database/models/entities';
import { Between, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetListShoesDto } from './dtos/get-list-shoes.dto';
import { AddNewShoesDto } from './dtos/add-new-shoes.dto';
import { ApiError } from '../common/classes/api-error';
import { ErrorCode } from '../common/constants/errors';

@Injectable()
export class ShoesService {
  constructor(
    @InjectRepository(Shoes)
    private readonly shoesRepository: Repository<Shoes>,
  ) {}

  async getListShoes(query: GetListShoesDto) {
    const conditions: { [k: string]: any } = {};
    if (query.brand) {
      conditions['brand'] = query.brand;
    }
    if (query.size) {
      conditions['size'] = query.size;
    }
    if (query.fromPrice && query.toPrice) {
      conditions['price'] = Between(query.fromPrice, query.toPrice);
    }
    if (query.keyword) {
      conditions.name = ILike(`%${query.keyword}%`);
    }
    const [shoes, total] = await this.shoesRepository.findAndCount({
      where: conditions,
      take: query.limit,
      skip: query.offset,
    });
    if (total === 0) return { shoes: [], total: 0 };
    return { shoes, total };
  }

  async addNewShoes(body: AddNewShoesDto) {
    const shoes = await this.shoesRepository.findOneBy({ code: body.code });
    if (shoes) {
      throw new ApiError(ErrorCode.SHOES_IS_EXISTS);
    }

    const newShoes = this.shoesRepository.create(body);
    return await this.shoesRepository.save(newShoes);
  }
}
