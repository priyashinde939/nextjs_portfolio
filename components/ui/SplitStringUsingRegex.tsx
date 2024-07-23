function splitStringUsingRegex(inputString:string) : String[]{
const characters: String[] = [];
const regex = /[\s\S]/g;

let match;
while((match = regex.exec(inputString)) !== null) {
    characters.push(match[0])
}
return characters
}

export default splitStringUsingRegex;