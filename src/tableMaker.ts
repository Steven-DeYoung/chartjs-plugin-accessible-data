/**
 * A collection of functions to help construct HTML tables
 * Accessible Table Reference: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
 */
export namespace TableMaker {
    /**
     * Accept a row label and data and construct an HTML table row
     * @param rowLabel string to use as the row header
     * @param data array of string data
     */
    export function constructRow(rowLabel: string, data: string[]): string {
        let labelStr = "";
        if (rowLabel != null) {
            labelStr = `<th scope="row">${rowLabel}</th>`;
        }
        let dataStr = "";
        if (data != null && data.length > 0) {
            dataStr = `<td>${data.join("</td><td>")}</td>`;
        }
        return `<tr>${labelStr}${dataStr}</tr>`;
    }

    /**
     * Accept an array of column headers and construct an HTML table header row
     * @param columnHeaders array of string column headers
     */
    export function constructHeaderRow(columnHeaders: string[]): string {
        let headerStr = "";
        if (columnHeaders != null && columnHeaders.length > 0) {
            headerStr = `<th scope="col">${columnHeaders.join('</th><th scope="col">')}</th>`;
        }
        return `<tr>${headerStr}</tr>`;
    }

    /**
     * Accept an array of row strings and construct the final HTML table
     * @param rows array of row strings
     */
    export function constructTable(header: string, rows: string[]): string {
        let headerStr = "";
        if (header != null) {
            headerStr = `<thead>${header}</thead>`;
        }
        let rowsStr = "";
        if (rows != null && rows.length > 0) {
            rowsStr = `<tbody>${rows.join("")}</tbody>`;
        }
        return `<table>${headerStr}${rowsStr}</table>`;
    }
}