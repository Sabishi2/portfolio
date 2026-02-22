import { ProjectT } from "../../project-type";
import { Component, input } from '@angular/core';
import { RecursiveComponent } from "./recursive-component";

interface specialCharHandlerResult {
    returnListAdd: Array<any>;
    stack: Array<string>;
    initialized: boolean;
}

interface specialCharsDesc {
    startChar: string,
    endChar: string,
    startTag: string,
    endTag: string,
}


@Component({
    imports: [RecursiveComponent],
    selector: 'project-description',
    templateUrl: './project-description.html',
})


export class ProjectDescription {

    /*parseLinkText(linkText: string, linkToProject: string) {
        // (?:[^.\\][\[]) -> Match '[' character that is not preceded with '\'
        // (?:[^.\\][\]]) -> Match ']' character that is not preceded with '\'
        let fullText: string;
        const linkStart: number = linkText.search(/(?:[^.\\][\[])/gm) + 1; // Index the actual opening bracket(not the character before it)
        if (linkStart <= 0) {

        }
        else {
            const linkEnd: number = linkText.search(/(?:[^.\\][\]])/gm) + 1; // Same with end bracket
            const fullTextStart: string = linkText.substring(0, linkStart);
            let fullTextMiddle: string = linkText.substring(linkStart + 1, linkEnd); // Omit the '[' and ']'
            const fullTextEnd: string = linkText.substring(linkEnd + 1);
            fullTextMiddle = `<a href="${linkToProject}">${fullTextMiddle}</a>`
            fullText = fullTextStart + fullTextMiddle + fullTextEnd;
        }

        // /(?<!(?:[^\\][\\])+(?:[\\]{2})*)\\/gm -> 
        // Match escape character '\' that is not followed by 2x escape char '\\' 
        // and any char except escape char + escape char '(not \)\'
        fullText = fullText.replaceAll(/(?<!(?:[^\\][\\])+(?:[\\]{2})*)\\/gm, "");
        return fullText
    }*/

    generalParse(text: string) {
        // Return list of the text, with parsed information
        // Return example: [["linkStart","https://.../"], ["boldStart"], ["italicStart"], ["content","regular text"], ["boldEnd"], ["italicEnd"], ["linkEnd"]]
        // example input:
        // "The *quick* brown [https://.../](fox) jumped over the |fence|"
        // |: italics, *: bold, (link)[text]: hyperlink

        // Breakpoints from defaults list: []
        // Stack for currentModification: ["linkText", "bold"] -> Opening adds to stack, closing removes from stack
        // linkList, boldList, italicList = { startIndex: "text", ... }
        // foreach breakpoint: remove that part from full string. Add previous part to list
        let curChar: string = '';
        const linkChar: string = '[';
        const escapeChar: string = '\\';
        const specialChars: Array<string> = ['*', '|', ')']

        const specialCharsDesc: specialCharsDesc[] = [
            {
                startChar: "*",
                endChar: "*",
                startTag: "boldStart",
                endTag: "boldEnd",
            },
            {
                startChar: "|",
                endChar: "|",
                startTag: "italicStart",
                endTag: "italicEnd"
            },
            {
                startChar: "(",
                endChar: ")",
                startTag: "linkStart",
                endTag: "linkEnd",
            }
        ];
        let curContent = '';

        let stack: Array<string> = [];
        let returnList: Array<Array<any>> = [];
        let tagId = 0; //Generate a seperate unique id for each tag to help angular @for track it

        for (let i = 0; i < text.length; i++) {
            curChar = text.charAt(i);

            if (curChar === linkChar) {
                returnList.push([tagId, "content", curContent]);
                tagId++;
                curContent = '';

                stack.push('(');
                let hrefObj = this.linkStartHandler(text, i);

                // Skip over the string to the part where the link ended plus omit the ']' and '(' 
                i = hrefObj.hrefEnd + 1;
                returnList.push([tagId, 'linkStart', hrefObj.href]);
                tagId++;
            }
            else if (specialChars.includes(curChar)) {
                returnList.push([tagId, "content", curContent]);
                tagId++;
                curContent = '';

                let handlerResult: specialCharHandlerResult = this.specialCharHandler(specialCharsDesc, stack, curChar);
                returnList.push([tagId, ...handlerResult.returnListAdd]);
                tagId++;
                stack = handlerResult.stack;
            }
            else {
                curContent += curChar;

            }
        }
        returnList.push([tagId, "content", curContent]);
        tagId++;

        if (stack.length != 0) {
            throw Error(`Unclosed text modification tag somewhere, Unclosed tag is ${stack[stack.length - 1]}`);
        }
        let tempList: Array<any> = [];
        returnList.forEach(section => {
            if (!(section[1] == "content" && section[2] == "")) {
                tempList.push(section);
            }
        })
        returnList = tempList;
        let tree: Array<any> = new Array(0);
        tempList = this.createTree(returnList, 0, tree, specialCharsDesc);

        return tempList;

    }

    createTree(returnList: Array<Array<string>>, startIndex: number, currentTree: Array<any>, specialCharsDesc: Array<specialCharsDesc>): Array<any> {
        /*
            
        */

        currentTree = currentTree ?? [];

        for (let i = startIndex; i < returnList.length; i++) {
            for (let j = 0; j < specialCharsDesc.length; j++) {
                if (returnList[i][1] === specialCharsDesc[j].startTag) {
                    let pushable: Array<any> = structuredClone(returnList[i]);
                    let childHandling = this.createTree(returnList, i + 1, [], specialCharsDesc);
                    i = childHandling[0];
                    pushable.push(childHandling[1]);
                    currentTree.push(pushable);
                }
                else if (returnList[i][1] === specialCharsDesc[j].endTag) {
                    return [i, currentTree];
                }
            };
            if (returnList[i][1] === "content") {
                let pushable: Array<any> = structuredClone(returnList[i]);
                currentTree.push(pushable);
            }
        }
        return currentTree;
    }

    specialCharHandler(specialCharsDesc: Array<specialCharsDesc>, stack: Array<string>, curChar: string): specialCharHandlerResult {
        // Input: const specialChars, current stack and current char
        // Output: list to append to returnList, modified stack
        let returnable: specialCharHandlerResult = {
            returnListAdd: [],
            stack: [],
            initialized: false
        };
        if (stack.length == 0) {
            specialCharsDesc.forEach(specialCharDesc => {
                if (curChar === specialCharDesc.startChar) {
                    stack.push(specialCharDesc.startChar);
                    returnable = {
                        returnListAdd: [specialCharDesc.startTag],
                        stack: stack,
                        initialized: true,
                    };
                }
            });
        }
        else {
            specialCharsDesc.forEach(specialCharDesc => {
                if (curChar === specialCharDesc.endChar && stack[stack.length - 1] === specialCharDesc.startChar) {
                    stack.pop();
                    returnable = {
                        returnListAdd: [specialCharDesc.endTag],
                        stack: stack,
                        initialized: true
                    }
                }
                else if (curChar === specialCharDesc.startChar) {
                    stack.push(specialCharDesc.startChar);
                    returnable = {
                        returnListAdd: [specialCharDesc.startTag],
                        stack: stack,
                        initialized: true

                    }
                }
            });
        }
        if (!returnable.initialized) {
            throw Error(`Mismatch of special characters, expected one ending character and got another at index of ${curChar}`);
        }

        return returnable;

    }

    linkStartHandler(text: string, startIndex: number) {
        let hrefObj = { href: "", hrefStart: startIndex, hrefEnd: -1 };
        for (let i = startIndex + 1; i < text.length; i++) {
            if (text.charAt(i) == "]") {
                hrefObj.hrefEnd = i;
                break;
            } else {
                hrefObj.href += text.charAt(i);
            }
        }
        if (hrefObj.hrefEnd == -1) {
            throw Error('-1 as hrefEnd, make sure your string has an ending for the link.')
        }
        return hrefObj;
    }

    descriptionText = input.required<string>();
}