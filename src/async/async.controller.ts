import { Controller, Get, Param } from '@nestjs/common';
import { AsyncService } from './async.service';

@Controller('async')
export class AsyncController {
  constructor(private readonly asyncService: AsyncService) {}
  @Get(':e')
  async(@Param('e') e: string) {
    return this.asyncService.promise(e);
  }
}
