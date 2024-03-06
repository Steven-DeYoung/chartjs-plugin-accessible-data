import { TableMaker } from './tableMaker';

/**
 * Constructs an HTML table from the passed data.
 * @param rowNames array of row names (excluding header row)
 * @param colNames array of column names (including the row name column)
 * @param dataset Array of data points (primatives, or objects having the same properties).
 */
export function buildDataTable(rowNames, colNames, dataset) {
    rowNames = rowNames.slice(); // Don't modify the passed array
    let tableHeader = TableMaker.constructHeaderRow(colNames);
    let tableRows = [];

    for (let dataPoint of dataset.data) {
        let rowData = [];

        if (typeof dataPoint === "object") {
            for (let key in dataPoint) {
                rowData.push(dataPoint[key]);
            }
        } else {
            rowData.push(dataPoint);
        }

        // Create empty cells for any extra header columns (excluding the row label)
        for (let i = rowData.length; i < colNames.length - 1; i++) {
            rowData.push("");
        }

        tableRows.push(TableMaker.constructRow(rowNames.shift(), rowData));
    }
    return TableMaker.constructTable(tableHeader, tableRows);
}