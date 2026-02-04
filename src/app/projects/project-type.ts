export type ProjectT = {
    id: number,
    name: string;
    imageURL: string;
    screenshotFolder?: string;
    screenshotURLs?: Array<string>;
    longDescription: string;
    shortDescription: string;
    public: boolean;
    linkToProject: string;
    linkText?: string;
    demoYouTubeLink?: string;
    technologiesUsed?: Array<string>;
    alternateLinkToProject?: string;
    alternateLinkText?: string;
}

