import { RecipeManagementService } from './../services/recipe-management.service';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})

export class ChangeBackgroundDirective {

  @Input() approved;
  constructor(private eleRef: ElementRef, private rm: RecipeManagementService) {
  }

  ngOnInit() {
    if (this.approved === '1') {
      this.eleRef.nativeElement.style.fontStyle = 'italic';
    }
  }
}
