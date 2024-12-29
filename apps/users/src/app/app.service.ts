import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll() {
    try {
      const response = await this.prisma.user.findMany()

      return {
        data: response,
      }
    } catch (e) {
      console.log(e)

      throw new InternalServerErrorException()
    }
  }
}
