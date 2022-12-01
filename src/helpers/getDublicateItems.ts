export function getDublicateItems(array: any, filterProp: string): any[] {
    // console.log(array)
    // console.log(filterProp)

    const duplicateIDs = array
        .map((el: any) => el[filterProp])
        .map(
            (el: any, idx: number, self: any[]) =>
                self.indexOf(el) !== idx && idx
        )
        .filter((obj: number) => array[obj])
        .map((el: any) => array[el][filterProp]);

    return array.filter((obj: any) => duplicateIDs.includes(obj[filterProp]));
}
