import { Injectable } from '@nestjs/common';

@Injectable()
export class AsyncService {
  promise(e) {
    const message = 'completed';
    const error = 'Failed';
    const promise1 = new Promise(
      (resolve: (value: string) => void, reject: (value: string) => void) => {
        //
        if (e === 'error') {
          reject(error);
        } else {
          resolve(message);
        }
      },
    )
      .then((m: string) => {
        return m;
      })
      .catch((e: Error) => {
        return e;
      });
    const promise2 = new Promise((resolve: (value: string) => void) => {
      setTimeout(resolve, 2500, message);
    });

    const promise3 = new Promise((resolve: (value: string) => void) => {
      setTimeout(resolve, 3000, message);
    });

    return Promise.all([promise1, promise2, promise3])
      .then((values) => {
        return values;
      })
      .catch(() => {
        return error;
      });
  }
}
