
export function isPosNumber(str: string): boolean {
    const maybePosNumber = parseInt(str, 10);
    if (!isNaN(maybePosNumber)) {
        if (maybePosNumber >= 0) {
            return true;
        }
    } else {
        return false;
    }
}

export function isValidCommands(commands: string): boolean {
    var separatedCommands: string[] = commands.split('');
    var valid: boolean = true;
    for (let item of separatedCommands) {
        if(!isValidCommand(item)){
            valid = false;
            break;
        }
    }
    return valid;
}

export function isValidCommand(command: string): boolean {
    switch(command) {
        case "f":
        case "b":
        case "l":
        case "r":
            return true;
        default:
            return false;
    }
}
