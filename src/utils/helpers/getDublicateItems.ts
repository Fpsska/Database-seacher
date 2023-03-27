export function getDublicateItems(array: any[], filterProp: string): any[] {
    const arrayOfPropsValue = JSON.parse(JSON.stringify(array)).map(
        (el: any) => el[filterProp]
    );
    const arrayOfdublicatedProps = arrayOfPropsValue.filter(
        (item: any, index: number) => arrayOfPropsValue.indexOf(item) !== index
    );
    const outputData = array.filter(item =>
        arrayOfdublicatedProps.includes(item[filterProp])
    );

    switch (filterProp) {
        case 'name':
            outputData.sort((a, b) =>
                a[filterProp].toLowerCase() > b[filterProp].toLowerCase()
                    ? 1
                    : -1
            );
            break;
        case 'count':
            outputData.sort((a, b) => a[filterProp] - b[filterProp]);
            break;
        case 'distance':
            outputData.sort((a, b) => a[filterProp] - b[filterProp]);
            break;
        default:
            return outputData;
    }

    return outputData;
}
