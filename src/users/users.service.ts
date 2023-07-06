import { Injectable } from '@nestjs/common';
import * as dynamoose from 'dynamoose';
import { UserSchema } from './entities/user.schema';

@Injectable()
export class UsersService {
  /*
  private dbInstance: Model<User>;

  constructor() {
    const tableName = 'users';
    this.dbInstance = dynamoose.model<User>(tableName, UserSchema);
  }
  */
  //... crud functions
}
