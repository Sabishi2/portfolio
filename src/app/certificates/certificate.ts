import { Component, input } from '@angular/core';
import { CertificateClass } from './certificate-type';

@Component({
    selector: 'certificate-template',
    templateUrl: 'certificate.html'
})

export class Certificate {
    certificate = input.required<CertificateClass>();

}
