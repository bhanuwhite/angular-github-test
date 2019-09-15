import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }
  /* defining get method to fetch the details based on url */
  get(url: string) {
    return this.http.get(url);
  }
}
