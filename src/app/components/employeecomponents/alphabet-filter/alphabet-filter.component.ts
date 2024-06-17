import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'alphabetfilter',
  standalone: true,
  host: {
    'class': 'alphabet-filter d-flex jus-content-btw w-100'
  },
  imports:[NgFor],
  templateUrl: './alphabet-filter.component.html',
  styleUrls: ['./alphabet-filter.component.css']
})
export class AlphabetFilterComponent implements OnInit,OnChanges {
  alphabet: string[] = [];
  selectedAlphabet: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }
  }
  ngOnChanges(): void {
    this.selectedAlphabet=this.employeeService.selectedAlpha;
  }

  onAlphabeticSelect(alpha: string) {
    if (alpha === this.selectedAlphabet) {
      this.selectedAlphabet = '';
    } else {
      this.selectedAlphabet = alpha;
    }
    this.employeeService.selectedAlpha = this.selectedAlphabet;
    this.employeeService.getSortedEmployees();
  }
}

