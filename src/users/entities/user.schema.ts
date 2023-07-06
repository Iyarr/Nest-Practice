import * as dynamoose from 'dynamoose';

export const UserSchema = new dynamoose.Schema(
  {
    partition: {
      type: String,
      hashKey: true,
      required: true,
    },
    userID: {
      type: Number,
      hashKey: true,
      required: true,
    },
  },
  {
    saveUnknown: true,
    timestamps: true,
  },
);
