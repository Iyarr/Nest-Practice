import { Controller, Get, Post, Req, HttpCode, Param } from '@nestjs/common';
import Request from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
