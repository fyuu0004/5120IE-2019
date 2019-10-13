import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function matcherOneValidator(fg: FormGroup) {
  return fg.get('industryCtrl').value || fg.get('occupationCtrl').value === null ? null : { 'matchOneValid': false };
}
