import { Component, input } from '@angular/core';

@Component({
    imports: [],
    selector: 'recursive-component',
    templateUrl: './recursive-component.html',
})

export class RecursiveComponent {

    nestedData = input.required<any>();
}