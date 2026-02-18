import { Component } from '@angular/core';

@Component({
    selector: 'nav-button',
    template: `
        <span>
            <ng-content/>
        </span>
    `,
    styles: `
    span {
        padding: 4px 24px;
        border-radius: 48px;
        color: white;
        background-color: var(--gray-900);
    }

    span:hover {
        cursor: pointer;
        background-color: var(--gray-700);
    }
    `

})

export class NavButton {

}
