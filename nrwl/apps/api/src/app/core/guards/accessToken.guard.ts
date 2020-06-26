import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(public authService: AuthService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['token'];
    const storeHash = request.headers['storehash'];
    const pocToken = request.headers['poctoken'];

    if (token !== undefined && token !== null && token !== '') {
      this.authService.accessToken = token;
    }
    if (storeHash !== undefined && storeHash !== null && storeHash !== '') {
      this.authService.storeHash = storeHash;
    }
    if (pocToken !== undefined && pocToken !== null && pocToken !== '') {
      this.authService.pocToken = pocToken;
    }
    return (
      token !== undefined &&
      storeHash !== undefined &&
      pocToken !== undefined &&
      (token !== null && storeHash !== null && pocToken !== null) &&
      (token !== '' && storeHash !== '' && pocToken !== '')
    );
  }
}
