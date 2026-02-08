import { Component, input } from '@angular/core';
import { ProjectT } from '../project-type';
import { PPCarouselHolderModule } from './pp-carousel/pp-carousel-holder-module';


@Component({
    imports: [PPCarouselHolderModule],
    selector: 'project-page',
    templateUrl: './project-page.html',
    styleUrl: './project-page.scss'
})



export class ProjectPage {
    isUndefined(param1: any) {
        return param1 === undefined;
    }
    parseLinkText(linkText: string, linkToProject: string) {
        // (?:[^.\\][\[]) -> Match '[' character that is not preceded with '\'
        // (?:[^.\\][\]]) -> Match ']' character that is not preceded with '\'

        let fullText: string;
        const linkStart: number = linkText.search(/(?:[^.\\][\[])/gm) + 1; // Index the actual opening bracket(not the character before it)
        if (linkStart <= 0) {
            // If there is no brackets
            fullText = linkText + ` <a href="${linkToProject}">link</a>`;
        }
        else {
            const linkEnd: number = linkText.search(/(?:[^.\\][\]])/gm) + 1; // Same with end bracket
            const fullTextStart: string = linkText.substring(0, linkStart);
            let fullTextMiddle: string = linkText.substring(linkStart + 1, linkEnd); // Omit the '[' and ']'
            const fullTextEnd: string = linkText.substring(linkEnd + 1);
            console.log(fullTextEnd);
            fullTextMiddle = `<a href="${linkToProject}">${fullTextMiddle}</a>`
            fullText = fullTextStart + fullTextMiddle + fullTextEnd;
        }

        // /(?<!(?:[^\\][\\])+(?:[\\]{2})*)\\/gm -> 
        // Match escape character '\' that is not followed by 2x escape char '\\' 
        // and any char except escape char + escape char '(not \)\'
        fullText = fullText.replaceAll(/(?<!(?:[^\\][\\])+(?:[\\]{2})*)\\/gm, "");
        return fullText

    }
    project = input.required<ProjectT>();
}
