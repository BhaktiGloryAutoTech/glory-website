import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private _http: HttpClient) {}
  envurl() {
    return "https://glorywebsite.herokuapp.com/api/gloryweb/";
  }
}
