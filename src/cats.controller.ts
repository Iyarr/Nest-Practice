import { Controller, Get, Post, Req, HttpCode, Param } from '@nestjs/common';
import Request from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  /*@Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }*/

  @Get()
  findSomeCats() {
    const promise1 = new Promise((resolve) => {
      resolve('completed');
    });
    const promise2 = 42;
    const promise3 = new Promise((resolve) => {
      setTimeout(resolve, 3000, 'foo');
    });

    return Promise.all([promise1, promise2, promise3])
      .then((values) => {
        return values;
      })
      .catch(() => {
        return 'False';
      });
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
