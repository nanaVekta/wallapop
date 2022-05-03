import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItemsResponse } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<IItemsResponse>{
    return this.http.get<IItemsResponse>(environment.itemsUrl);
  }
}
