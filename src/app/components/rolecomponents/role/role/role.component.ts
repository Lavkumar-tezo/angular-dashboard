import { Component, DoCheck } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { RolefilterComponent } from '../rolefilter/rolefilter.component';
import { RolecardComponent } from '../rolecard/rolecard.component';
import { Role } from '../../../../models/role';
import { RoleService } from '../../../../services/role/role.service';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'role',
  standalone: true,
  host:{
    'class':'w-100'
  },
  imports: [RouterOutlet],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent{

}
