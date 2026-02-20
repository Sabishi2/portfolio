import { OwlOptions } from "ngx-owl-carousel-o";

export type ProjectT = {
    id: number,
    name: string;
    imageURL: string;
    screenshotFolder?: string;
    screenshotFilenames?: Array<string>;
    longDescription: string;
    shortDescription: string;
    public: boolean;
    linkToProject?: string;
    carouselOptions?: OwlOptions;
    // for linkText wrap the section you want to hyperlink with square brackets: []  
    // Alternatively the link will be pasted in the end with [link]
    // To use square brackets in your text, use escape character: \
    // The JSON file will need an escape character for the escape character like so: \\[
    linkText?: string;
    alternateLinkToProject?: string;
    alternateLinkText?: string;
    demoYouTubeId?: string;
    technologiesUsed?: Array<string>;
}

