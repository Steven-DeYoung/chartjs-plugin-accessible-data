import { ArrayDispenser } from './arrayDispenser';
import { TableMaker } from './tableMaker';

/**
 * Constructs an HTML table from the passed data.
 * @param rowNames array of row names (excluding header row)
 * @param colNames array of column names (including the row name column)
 * @param dataset Array of data points (primatives, or objects having the same properties).
 */
export function buildDataTable(rowNames, colNames, dataset) {
    let rowNameDispenser = new ArrayDispenser(rowNames);
    let tableHeader = TableMaker.constructHeaderRow(colNames);
    let tableRows = [];

    for (let dataPoint of dataset.data) {
        let rowData = [];

        // TODO: maybe sanity check using column count, could want different colNames than data points, map would be helpful here
        if (typeof dataPoint === "object") {
            for (let key in dataPoint) {
                rowData.push(dataPoint[key]);
            }
        } else {
            rowData.push(dataPoint);
        }
        tableRows.push(TableMaker.constructRow(rowNameDispenser.dispense(), rowData));
    }
    return TableMaker.constructTable(tableHeader, tableRows);
}