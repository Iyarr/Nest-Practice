import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
