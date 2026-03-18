export class CertificateClass {
    name: string;
    provider: string;
    issue_date: Date | string;
    imageURL: string;
    constructor(name: string,
        provider: string,
        issue_date: string,
        imageURL: string,) {
        this.name = name;
        this.provider = provider;
        this.issue_date = new Date(issue_date);
        this.imageURL = imageURL;
    }
}