import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  selectedNavId = 0;
  constructor(
    private http: HttpClient,
    @Inject('environment') private environment
  ) {}

  private get headers() {
    const headers = null;
    return headers;
  }

  get selectedNavigationID(): number {
    return this.selectedNavId;
  }

  set selectedNavigationID(navID: number) {
    this.selectedNavId = navID;
  }

  get urlPrefix(): string {
    // return 'http://localhost:3333/api/';
    return this.environment.apiUrl;
  }

  async post(url: string, body: any): Promise<any> {
    const response = (await this.http
      .post(this.urlPrefix + url, body, { headers: this.headers })
      .toPromise()
      .catch(responseError => {
        /**
         * Token is expired and we are redirecting user to login page.
         */
      })) as any;

    const result = await response;
    return result;
  }
  async get(url: string): Promise<any> {
    const response = (await this.http
      .get(this.urlPrefix + url, {
        headers: this.headers
      })
      .toPromise()
      .catch(responseError => {
        /**
         * Token is expired and we are redirecting user to login page.
         */
        if (
          responseError.error.isError &&
          responseError.error.status &&
          responseError.error.status === 401
        ) {
        }
      })) as any;

    return response;
  }

  async getThirdParty(baseUrl: string, url: string): Promise<any> {
    const response = (await this.http
      .get(baseUrl + url, {
        headers: this.headers
      })
      .toPromise()
      .catch(responseError => {
        /**
         * Token is expired and we are redirecting user to login page.
         */
        if (
          responseError.error.isError &&
          responseError.error.status &&
          responseError.error.status === 401
        ) {
        }
      })) as any;

    return response;
  }
}