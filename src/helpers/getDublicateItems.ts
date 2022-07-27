export function getDublocateItems(array: any, filterProp: string): any[] {

    const duplicateIDs = array.map((e: any) => e[filterProp])
        .map((e: any, i: number, self: any[]) => self.indexOf(e) !== i && i)
        .filter((obj: number) => array[obj])
        .map((e: any) => array[e][filterProp]);

    return array.filter((obj: any) => duplicateIDs.includes(obj[filterProp]));
}