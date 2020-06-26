import { Injectable, InternalServerErrorException } from '@nestjs/common';

export enum Provider {
  Oauth2 = 'oauth2'
}

@Injectable()
export class AuthService {
  accessToken: string;
  storeHash: string;
  email: string;
  pocToken: string;
}
