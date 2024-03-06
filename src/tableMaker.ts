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
        return `<tr><th scope="row">${rowLabel}</th><td>${data.join("</td><td>")}</td></tr>`;
    }

    /**
     * Accept an array of column headers and construct an HTML table header row
     * @param columnHeaders array of string column headers
     */
    export function constructHeaderRow(columnHeaders: string[]): string {
        return `<tr><th scope="col">${columnHeaders.join('</th><th scope="col">')}</th></tr>`;
    }

    /**
     * Accept an array of row strings and construct the final HTML table
     * @param rows array of row strings
     */
    export function constructTable(header: string, rows: string[]): string {
        return `<table><thead>${header}</thead><tbody>${rows.join("")}</tbody></table>`;
    }
}