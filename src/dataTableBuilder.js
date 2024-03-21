import { TableMaker } from "./tableMaker";

/**
 * Constructs an HTML table from the passed data.
 * @param rowNames Array of row names (excluding header row).
 * @param colNames Array of column names (including the row name column).
 * @param dataset Array of data points (primatives, or objects having the same properties).
 */
export function buildDataTable(rowNames, colNames, dataset) {
  rowNames = rowNames?.slice(); // Don't modify the passed array
  let tableHeader = null;
  let numColumns = 0;
  if (colNames != null) {
    tableHeader = TableMaker.constructHeaderRow(colNames);
    numColumns = colNames.length;
  }

  let dataArr = [];
  if (dataset != null) {
    dataArr = dataset;
  }

  let tableRows = [];
  for (let dataPoint of dataArr) {
    let rowData = [];

    if (typeof dataPoint === "object") {
      for (let key in dataPoint) {
        rowData.push(dataPoint[key]);

        // Skip over any 'extra' data (only applies when numColumns > 0)
        if (rowData.length === numColumns) {
          break;
        }
      }
    } else {
      rowData.push(dataPoint);
    }

    // Create empty cells for any extra header columns
    for (let i = rowData.length; i < numColumns; i++) {
      rowData.push("");
    }

    tableRows.push(TableMaker.constructRow(rowNames?.shift(), rowData));
  }
  return TableMaker.constructTable(tableHeader, tableRows);
}
