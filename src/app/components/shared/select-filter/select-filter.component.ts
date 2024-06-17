import { NgFor, NgIf,CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit,DoCheck,OnChanges, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Console } from 'node:console';

@Component({
  selector: 'selectfilter',
  standalone: true,
  host: {
    'class': 'custom-select filter-select'
  },
  imports: [NgFor, FormsModule,NgIf,CommonModule],
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements AfterViewInit {
  @Input() name: string="";
  @Input() values: string[]=[];
  @Input() isAllValuesDefault:boolean=true;
  count: number = 0;
  selectedValues: Set<string> = new Set();
  isDropdownVisible: boolean = false;
  @Output() valuesEvent:EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() filterChangedEvent:EventEmitter<string>= new EventEmitter<string>();
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {}


  ngOnChanges(){
    if(this.isAllValuesDefault){
      this.selectedValues.clear();
      this.count = 0;
      this.isDropdownVisible = false;
      const checkboxes = this.el.nativeElement.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox: HTMLInputElement) => {
        checkbox.checked = false;
        });
    }
  }
  showDropdown() {
    this.isDropdownVisible = true;
  }
  

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isDropdownVisible = false;
    }
  }

  onCheckboxChange(event: Event) {
    this.isAllValuesDefault=true;
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.selectedValues.add(input.value);
    } else {
      this.selectedValues.delete(input.value);
    }
    this.count = this.selectedValues.size;
    this.valuesEvent.emit(Array.from(this.selectedValues));
    this.filterChangedEvent.emit(this.name);
  }

  getSelectedValues(): string[] {
    return Array.from(this.selectedValues);
  }

  // reset() {
  //   this.selectedValues.clear();
  //   this.count = 0;
  //   this.isDropdownVisible = false;
  //   const checkboxes = this.el.nativeElement.querySelectorAll('input[type="checkbox"]');
  //   checkboxes.forEach((checkbox: HTMLInputElement) => {
  //     checkbox.checked = false;
  //   });
  }

  

