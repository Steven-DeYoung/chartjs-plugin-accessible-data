import { buildDataTable } from '../src/dataTableBuilder';

// Define some helper functions to build some of the test entries & strings
function makeXYZTestData(numEntries) {
    return Array.from({length: numEntries},
        (_,idx) => ({x: `x${idx}`, y: `y${idx}`, z: `z${idx}`}));
}

function makeRowNames(numRows) {
    return Array.from({length: numRows}, (_,idx) => `row${idx}`);
}

function makeScalarTestData(numEntries) {
    return Array.from({length: numEntries}, (_,idx) => idx);
}


test("buildEmptyDataTable", () => {
    let result = buildDataTable(null, null, null);
    let expected = "<table></table>";
    expect(result).toEqual(expected);
});

test("buildDataTableDataOnly", () => {
    let dataset = makeXYZTestData(10);
    let result = buildDataTable(null, null, dataset);
    let dataRows = Array.from(dataset,
        (entry) => `<tr><td>${entry.x}</td><td>${entry.y}</td><td>${entry.z}</td></tr>`);
    let expected = `<table><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableColNamesOnly", () => {
    let colNames = ["x","y","z"];
    let result = buildDataTable(null, colNames, null);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let expected = `<table><thead>${headerRow}</thead></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableRowNamesOnly", () => {
    let rowNames = ["row1","row2","row3"];
    let result = buildDataTable(rowNames, null, null);
    let expected = `<table></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableNoRowNames", () => {
    let colNames = ["x","y","z"];
    let dataset = makeXYZTestData(10);
    let result = buildDataTable(null, colNames, dataset);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let dataRows = Array.from(dataset,
        (entry) => `<tr><td>${entry.x}</td><td>${entry.y}</td><td>${entry.z}</td></tr>`);
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableNoColNames", () => {
    let dataset = makeXYZTestData(10);
    let rowNames = makeRowNames(10);
    let result = buildDataTable(rowNames, null, dataset);
    let dataRows = Array.from(dataset,
        (entry) => `<tr><th scope="row">${rowNames.shift()}</th><td>${entry.x}</td><td>${entry.y}</td><td>${entry.z}</td></tr>`);
    let expected = `<table><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableNoDataset", () => {
    let rowNames = ["row1","row2","row3"];
    let colNames = ["x","y","z"];
    let result = buildDataTable(rowNames, colNames, null);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let expected = `<table><thead>${headerRow}</thead></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableSingleRow", () => {
    let rowNames = makeRowNames(1);
    let colNames = ["x","y","z"];
    let dataset = makeXYZTestData(1);
    let result = buildDataTable(rowNames, colNames, dataset);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let dataRows = `<tr><th scope="row">${rowNames[0]}</th><td>${dataset[0].x}</td><td>${dataset[0].y}</td><td>${dataset[0].z}</td></tr>`;
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableMultipleRows", () => {
    let rowNames = makeRowNames(10);
    let colNames = ["x","y","z"];
    let dataset = makeXYZTestData(10);
    let result = buildDataTable(rowNames, colNames, dataset);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let dataRows = Array.from(dataset,
        (entry) => `<tr><th scope="row">${rowNames.shift()}</th><td>${entry.x}</td><td>${entry.y}</td><td>${entry.z}</td></tr>`);
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableScalarData", () => {
    let rowNames = makeRowNames(10);
    let colNames = ["data"];
    let dataset = makeScalarTestData(10);
    let result = buildDataTable(rowNames, colNames, dataset);
    let headerRow = `<tr><th scope="col">data</th></tr>`;
    let dataRows = Array.from(dataset,
        (entry) => `<tr><th scope="row">${rowNames.shift()}</th><td>${entry}</td></tr>`);
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableJaggedData", () => {
    let rowNames = makeRowNames(5);
    let colNames = ["x","y","z"];
    let dataset = [
        {x: "x0", y: "y0", z: "z0"},
        1,
        {},
        {x: "x2"},
        {x: "x3", y: "y3", z: "z3", a: "a3"}
    ];
    let result = buildDataTable(rowNames, colNames, dataset);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let dataRows = [
        `<tr><th scope="row">${rowNames.shift()}</th><td>x0</td><td>y0</td><td>z0</td></tr>`,
        `<tr><th scope="row">${rowNames.shift()}</th><td>1</td><td></td><td></td></tr>`,
        `<tr><th scope="row">${rowNames.shift()}</th><td></td><td></td><td></td></tr>`,
        `<tr><th scope="row">${rowNames.shift()}</th><td>x2</td><td></td><td></td></tr>`,
        `<tr><th scope="row">${rowNames.shift()}</th><td>x3</td><td>y3</td><td>z3</td></tr>`
    ];
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableInsufficientColNames", () => {
    let rowNames = makeRowNames(10);
    let colNames = ["x"];
    let dataset = makeXYZTestData(10);
    let result = buildDataTable(rowNames, colNames, dataset);
    let headerRow = `<tr><th scope="col">x</th></tr>`;
    let dataRows = Array.from(dataset,
        (entry) => `<tr><th scope="row">${rowNames.shift()}</th><td>${entry.x}</td></tr>`);
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});

test("buildDataTableInsufficientRowLabels", () => {
    let rowNames = makeRowNames(5);
    let colNames = ["x","y","z"];
    let dataset = makeXYZTestData(10);
    let result = buildDataTable(rowNames, colNames, dataset);
    let headerRow = `<tr><th scope="col">x</th><th scope="col">y</th><th scope="col">z</th></tr>`;
    let rowHeaders = rowNames.map((name) => `<th scope="row">${name}</th>`).concat(Array.from({length: 5}, () => ""));
    let dataRows = Array.from(dataset,
        (entry) => `<tr>${rowHeaders.shift()}<td>${entry.x}</td><td>${entry.y}</td><td>${entry.z}</td></tr>`);
    let expected = `<table><thead>${headerRow}</thead><tbody>${dataRows.join("")}</tbody></table>`;
    expect(result).toEqual(expected);
});