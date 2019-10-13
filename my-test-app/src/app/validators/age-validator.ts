import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

        if (!control.value) {
            return { message: 'Please select one option.' };
        }
        return null;
    };
}
