import { Component } from '@angular/core';
import { RouterLinkActive,RouterLink,RouterModule} from '@angular/router';
@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,RouterModule],
  providers:[],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(){

    }
}
