import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll() {
    try {
      const response = await this.prisma.link.findMany()

      return {
        data: response
      }
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }
}
