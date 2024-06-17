import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects:string[]=['Task -1','Task-2','Task -3','Task-4','Task -5']
  constructor() { }

  getProjects(){
    return this.projects;
  }
}
