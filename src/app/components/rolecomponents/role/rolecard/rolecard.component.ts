import { Component, Input } from '@angular/core';
import { Role } from '../../../../models/role';
import { NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'rolecard',
  standalone: true,
  imports: [NgIf,RouterLink,RouterModule],
  templateUrl: './rolecard.component.html',
  styleUrl: './rolecard.component.css'
})
export class RolecardComponent {
  @Input('roledata') roledata:Role;

}
