import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Directive({
  selector: '[appHighligtError]',
  standalone: true
})
export class HighligtErrorDirective {
  @Input('appSubmitted') formGroup: FormGroup;

  constructor() { }

  @HostListener('submit')
  onFormSubmit() {
    Object.keys(this.formGroup.controls).forEach(key => {
      const control = this.formGroup.get(key) as FormControl;
      control.setErrors({ submitted: true });
    });
  }

  @HostListener('input', ['$event.target'])
  onInputChange(target: any) {
    const controlName = target.getAttribute('formControlName');
    if (controlName) {
      const control = this.formGroup.get(controlName) as FormControl;
      if (control.errors && control.errors['submitted']) {
        delete control.errors['submitted'];
        if (!Object.keys(control.errors).length) {
          control.setErrors(null);
        }
      }
    }
  }
}
