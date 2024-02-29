import { TableMaker } from './tableMaker';

export const bubbleData = {
    id: 'bubbleData',
    afterDatasetsUpdate(chart, args, options) {
      // TODO: Add option to disable tabledata
      let dataStr = "";
      let bubbleLabels = chart.data.labels; // TODO: Bubble labels are not correct for bubbles with r > 1
      let labelIndex = 0;
      let getLabel = () => {
        if (labelIndex < bubbleLabels.length) {
          return bubbleLabels[labelIndex++];
        } else {
          return 'unknown';
        }
      };

      chart.data.datasets.forEach((dataset) => {
        dataStr += `Table of dataset "${dataset.label}":<br/>`;

        let colNames = ["Title"];
        for (let key in dataset.data[0]) {
          colNames.push(key);
        }
        let tableHeader = TableMaker.constructHeaderRow(colNames);
        let tableRows = [];

        for (let dataPoint of dataset.data) {
          let rowData = [];
          for (let key in dataPoint) {
            rowData.push(dataPoint[key]);
          }
          tableRows.push(TableMaker.constructRow(getLabel(), rowData));
        }
        dataStr += TableMaker.constructTable(tableHeader, tableRows);
        dataStr += "<br/>";
      });
  
      const par = document.createElement('p');
      par.innerHTML = dataStr;
      chart.canvas.appendChild(par);

      // For debugging, display table data as well
      // let dataTableParent = document.getElementById('dimensionsData');
      // dataTableParent.innerHTML = dataStr;
    }
  };