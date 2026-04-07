// export function sortValues(values, order = 'desc') {
//     return [...values].sort((a,b) => {
//         return order === 'asc'
//             ? a.localeCompare(b)
//             : b.localeCompare(a);
//     });
// }

export function sortValues(values, order = 'desc', type = 'string') {
    return [...values].sort((a, b) => {
        if (type === 'number') {
            return order === 'asc'
                ? a - b
                : b - a;
        }

        return order === 'asc'
            ? a.localeCompare(b)
            : b.localeCompare(a);
    });
}