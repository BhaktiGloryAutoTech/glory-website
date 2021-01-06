import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommonService } from "./common.service";
@Injectable({
  providedIn: "root",
})
export class CareerService {
  constructor(
    private _http: HttpClient,
    private commonService: CommonService
  ) {}

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getJobTitle() {
    return this._http.get(this.commonService.envurl() + "getVacancyList");
  }

  getVacancyListById(id: any) {
    return this._http.post(this.commonService.envurl() + "getVacancyById/", id);
  }

  hireApplication(data: any) {
    return this._http.post(
      this.commonService.envurl() + "hireapplication",
      data
    );
  }
}
