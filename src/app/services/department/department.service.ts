import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private depratments:string[]=['Product Eng','QA','UI/UX']

  getDepartments(){
    return this.depratments;
  }
}
