import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations:string[]=['Bangalore','Hyderabad']

  getLocations(){
    return this.locations;
  }
}
