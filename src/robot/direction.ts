export type Direction = 'N' | 'S' | 'E' | 'W';

export function isDirection(str: string): boolean {
    return !!convertToDirection(str);
}

export function convertToDirection(str: string): Direction {
    switch (str) {
        case 'N':
        case 'S':
        case 'E':
        case 'W':
            return str;
        default:
            return null;
    }
}
