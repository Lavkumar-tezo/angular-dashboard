import { Component, DoCheck } from '@angular/core';
import { Role } from '../../../../models/role';
import { RoleService } from '../../../../services/role/role.service';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { RolecardComponent } from '../rolecard/rolecard.component';
import { RolefilterComponent } from '../rolefilter/rolefilter.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'rolemain',
  standalone: true,
  imports: [PageTitleComponent,RolecardComponent,RolefilterComponent,NgFor],
  templateUrl: './rolemain.component.html',
  styleUrl: './rolemain.component.css'
})
export class RolemainComponent implements DoCheck {
  rolePageDesc={
    title1:'Role',
    titl2:'',
    desc:'Find all of your company\'s roles',
    btn1:'Add role',
    route:'roleform'
  }
  roles:Role[]=[];
  constructor(private role:RoleService
  ){
    this.roles=this.role.getRoles();
  }
  
  ngDoCheck(): void {
    this.roles=this.role.getRoles();
  }
}
