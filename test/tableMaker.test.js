import { TableMaker } from '../src/tableMaker';


// Tests for constructRow()
test("constructEmptyRow", () => {
    let result = TableMaker.constructRow(null, null);
    let expectedRow = '<tr></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructRowWithLabelOnly", () => {
    let result = TableMaker.constructRow("label", null);
    let expectedRow = '<tr><th scope="row">label</th></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructRowWithEmptyData", () => {
    let result = TableMaker.constructRow("label", []);
    let expectedRow = '<tr><th scope="row">label</th></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructRowWithDataOnly", () => {
    let result = TableMaker.constructRow(null, ["data"]);
    let expectedRow = '<tr><td>data</td></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructRowSingleData", () => {
    let result = TableMaker.constructRow("label", ["data"]);
    let expectedRow = '<tr><th scope="row">label</th><td>data</td></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructRowMultipleData", () => {
    let expectedRow = '<tr><th scope="row">label</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>';
    let result = TableMaker.constructRow("label", ["1","2","3","4","5"]);
    expect(result).toEqual(expectedRow);
})


// Tests for constructHeaderRow()
test("constructEmptyHeaderRow", () => {
    let result = TableMaker.constructHeaderRow(null);
    let expectedRow = '<tr></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructHeaderRowWithEmptyColumns", () => {
    let result = TableMaker.constructHeaderRow([]);
    let expectedRow = '<tr></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructHeaderRowSingleColumn", () => {
    let result = TableMaker.constructHeaderRow(["header"]);
    let expectedRow = '<tr><th scope="col">header</th></tr>';
    expect(result).toEqual(expectedRow);
})

test("constructHeaderRowMultipleColumn", () => {
    let result = TableMaker.constructHeaderRow(["header1","header2", "header3", "header4", "header5"]);
    let expectedRow = '<tr><th scope="col">header1</th>' +
        '<th scope="col">header2</th><th scope="col">header3</th>' +
        '<th scope="col">header4</th><th scope="col">header5</th></tr>';
    expect(result).toEqual(expectedRow);
})

// Tests for constructTable()
test("constructEmptyTable", () => {
    let result = TableMaker.constructTable(null, null);
    let expectedTable = '<table></table>';
    expect(result).toEqual(expectedTable);
})


test("constructTableWithHeaderOnly", () => {
    let headerRow = '<tr><th scope="col">header1</th><th scope="col">header2</th><th scope="col">header3</th><th scope="col">header4</th><th scope="col">header5</th></tr>';
    let result = TableMaker.constructTable(headerRow, null);
    let expectedTable = `<table><thead>${headerRow}</thead></table>`;
    expect(result).toEqual(expectedTable);
})


test("constructTableWithEmptyRows", () => {
    let headerRow = '<tr><th scope="col">header1</th><th scope="col">header2</th><th scope="col">header3</th><th scope="col">header4</th><th scope="col">header5</th></tr>';
    let result = TableMaker.constructTable(headerRow, []);
    let expectedTable = `<table><thead>${headerRow}</thead></table>`;
    expect(result).toEqual(expectedTable);
})


test("constructTableRowsOnly", () => {
    let rows = ['<tr><th scope="row">label</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>'];
    let result = TableMaker.constructTable(null, rows);
    let expectedTable = `<table><tbody>${rows[0]}</tbody></table>`;
    expect(result).toEqual(expectedTable);
})


test("constructTableSingleRow", () => {
    let headerRow = '<tr><th scope="col">header1</th><th scope="col">header2</th><th scope="col">header3</th><th scope="col">header4</th><th scope="col">header5</th></tr>';
    let rows = ['<tr><th scope="row">label</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>'];
    let result = TableMaker.constructTable(headerRow, rows);
    let expectedTable = `<table><thead>${headerRow}</thead><tbody>${rows[0]}</tbody></table>`;
    expect(result).toEqual(expectedTable);
})


test("constructTableMultipleRows", () => {
    let headerRow = '<tr><th scope="col">header1</th><th scope="col">header2</th><th scope="col">header3</th><th scope="col">header4</th><th scope="col">header5</th></tr>';
    let rows = [
        '<tr><th scope="row">ROW1</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>',
        '<tr><th scope="row">ROW2</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>',
        '<tr><th scope="row">ROW3</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>',
        '<tr><th scope="row">ROW4</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>',
        '<tr><th scope="row">ROW5</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>'];
    let result = TableMaker.constructTable(headerRow, rows);
    let expectedTable = `<table><thead>${headerRow}</thead>` +
        `<tbody>${rows[0]}${rows[1]}${rows[2]}${rows[3]}${rows[4]}</tbody></table>`;
    expect(result).toEqual(expectedTable);
})

