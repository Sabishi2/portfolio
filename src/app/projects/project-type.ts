export type ProjectT = {
    id: number, // done
    name: string; // done
    imageURL: string; // done
    screenshotFolder?: string; // done
    screenshotURLs?: Array<string>; // done
    longDescription: string; // done
    shortDescription: string; // done
    public: boolean; // done
    linkToProject: string;
    alternateLinkToProject?: string;
    alternateLinkText?: string;
    // for linkText wrap the section you want to hyperlink with square brackets: []  
    // Alternatively the link will be pasted in the end with [link]
    // To use square brackets in your text, use escape character: \
    // The JSON file will need an escape character for the escape character so for example: \\[
    linkText?: string;
    demoYouTubeLink?: string;
    technologiesUsed?: Array<string>;
}

