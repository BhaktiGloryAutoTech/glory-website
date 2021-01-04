import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private _http: HttpClient) {}

  public baseUrl = "https://glorywebsite.herokuapp.com/api/gloryweb/";

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getInTouch(data: any) {
    return this._http.post(this.baseUrl + "getInTouch", data);
  }
}
