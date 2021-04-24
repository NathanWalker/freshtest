import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
}) 
export class StateService {
  constructor() {
    console.log('StateService created.');
  }
}