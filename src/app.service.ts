import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NO DEPLOYES UN VIERNES! 😅';
  }
}
