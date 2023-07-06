import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { AsyncController } from './async/async.controller';
import { AsyncService } from './async/async.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { ReportsModule } from './reports/reports.module';
import dynamoose from 'dynamoose';

@Module({
  imports: [UsersModule, ReportsModule],
  controllers: [
    AppController,
    CatsController,
    AsyncController,
    UsersController,
  ],
  providers: [AppService, AsyncService],
})
export class AppModule {}
