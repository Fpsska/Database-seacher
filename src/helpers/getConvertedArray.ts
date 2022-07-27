export function getConvertedArray(startEl: number, endEl: number): any[] {
    return Array.from(Array(endEl).keys()).map(el => el + startEl);
};

