import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { AsyncController } from './async/async.controller';
import { AsyncService } from './async/async.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AsyncController],
  providers: [AppService, AsyncService],
})
export class AppModule {}
