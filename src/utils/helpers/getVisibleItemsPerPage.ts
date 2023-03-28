export function getVisibleItemsPerPage(
    currentPage: number,
    itemsPerPage: number,
    array: any[]
): any {
    const indexOfLastEl = currentPage * itemsPerPage;
    const indexOfFirstEl = indexOfLastEl - itemsPerPage;
    const visibleArrElements = array.slice(indexOfFirstEl, indexOfLastEl);

    return visibleArrElements;
}
