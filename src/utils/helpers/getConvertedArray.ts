export function getConvertedArray(startEl: number, endEl: number): number[] {
    return Array.from(Array(endEl).keys()).map(el => el + startEl);
}
