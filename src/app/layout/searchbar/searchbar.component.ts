import { Component } from '@angular/core';

@Component({
  selector: 'searchbar',
  standalone: true,
  host:{'class':'search-container d-flex jus-content-btw w-100 p-5'},
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

}
