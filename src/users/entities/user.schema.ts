import * as dynamoose from 'dynamoose';

export const UserSchema = new dynamoose.Schema(
  {
    partition: String,
    userID: Number,
  },
  {
    saveUnknown: true,
    timestamps: true,
  },
);
