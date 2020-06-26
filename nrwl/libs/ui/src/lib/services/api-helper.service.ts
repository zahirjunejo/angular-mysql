import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '@platform-services/loader.service';
import { IActionResult } from '../common/interfaces/interfaces';
import { environment } from '@platform-environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  getOptions(useDefaultSession = false) {
    return {
      headers: {
        useDefaultSession: useDefaultSession ? '1' : ''
      }
    };
  }

  async get(url: string, useDefaultSession = false): Promise<IActionResult> {
    this.loaderService.show();
    let isSuccess = true;
    const response = await this.http
      .get(url, this.getOptions(useDefaultSession))
      .toPromise()
      .catch(responseError => {
       // this.postErrorLog('GET', url, '', responseError);

        isSuccess = false;
        this.loaderService.hide();
        return responseError;
      });

    this.loaderService.hide();
    if (isSuccess) {
      return {
        isSuccess: true,
        data: response
      };
    }
    return response;
  }

  async post(
    url: string,
    body: any,
    useDefaultSession = false
  ): Promise<IActionResult> {
    this.loaderService.show();
    let isSuccess = true;
    const response = await this.http
      .post(url, body, this.getOptions(useDefaultSession))
      .toPromise()
      .catch(responseError => {
        //this.postErrorLog('POST', url, JSON.stringify(body), responseError);

        this.loaderService.hide();
        isSuccess = false;
        return responseError;
      });

    this.loaderService.hide();
    if (isSuccess) {
      return {
        isSuccess: true,
        data: response
      };
    }
    return response;
  }

  async put(
    url: string,
    body: any,
    useDefaultSession = false
  ): Promise<IActionResult> {
    this.loaderService.show();
    let isSuccess = true;
    const response = await this.http
      .put(url, body, this.getOptions(useDefaultSession))
      .toPromise()
      .catch(responseError => {
        //this.postErrorLog('PUT', url, JSON.stringify(body), responseError);

        this.loaderService.hide();
        isSuccess = false;
        return responseError;
      });

    this.loaderService.hide();
    if (isSuccess) {
      return {
        isSuccess: true,
        data: response
      };
    }
    return response;
  }

  async delete(url: string, useDefaultSession = false): Promise<IActionResult> {
    this.loaderService.show();
    let isSuccess = true;
    const response = await this.http
      .delete(url, this.getOptions(useDefaultSession))
      .toPromise()
      .catch(responseError => {
        //this.postErrorLog('DELETE', url, '', responseError);

        isSuccess = false;
        this.loaderService.hide();
        return responseError;
      });

    this.loaderService.hide();
    if (isSuccess) {
      return {
        isSuccess: true,
        data: response
      };
    }
    return response;
  }

  async postErrorLog(
    apiCallMethod: string,
    url: string,
    body: any,
    errorMessage: any
  ) {
    // await this.http
    //   .post(environment.adminApiUrl + "Logs/ErrorLog", {
    //     apiCallMethod: apiCallMethod,
    //     apiUrl: url,
    //     apiParams: body,
    //     errorMessage: JSON.stringify(errorMessage)
    //   }, this.getOptions(false))
    //   .toPromise()
    //   .catch(responseError => {
    //   });
    await this.http
      .post(
        environment.integrationApiUrl + 'Error',
        {
          tracking_guid: '00000000-0000-0000-0000-000000000000',
          status_id: 0,
          title: apiCallMethod + ' ' + url,
          detail: body,
          severity: 'Normal',
          scope: 'Platform',
          external_id: '',
          system_id: 0,
          mapping_collection_id: 0,
          destination: 'url'
        },
        this.getOptions(false)
      )
      .toPromise()
      .catch(responseError => {});
  }
}
