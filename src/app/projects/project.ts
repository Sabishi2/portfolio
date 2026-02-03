interface ProjectI {
    name: string;
    imageURL: string;
    longDescription: string;
    shortDescription: string;
    public: boolean;
    linkToProject: string;
}

export class Project {
    constructor(def: ProjectI) {
        Object.assign(this, def);
    }
}
