import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommonService } from "./common.service";
@Injectable({
  providedIn: "root",
})
export class WorkService {
  constructor(
    private _http: HttpClient,
    private commonService: CommonService
  ) {}

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getProjectList() {
    return this._http.get(this.commonService.envurl() + "getProjectList");
  }
  getProjectImageList(){
    return this._http.get(this.commonService.envurl()+ "getprojectidnameimg");
  }
}
