import { TableMaker } from './tableMaker';

export const barData = {
    id: 'barData',
    afterDatasetsUpdate(chart, args, options) {
      // TODO: Add option to disable tabledata
      let dataStr = "";
      let barLabels = chart.data.labels;
      let labelIndex = 0;
      let getLabel = () => {
        if (labelIndex < barLabels.length) {
          return barLabels[labelIndex++];
        } else {
          return 'unknown';
        }
      };
  
      chart.data.datasets.forEach((dataset) => {
        dataStr += `Table of dataset "${dataset.label}":<br/>`;
  
        let colNames = ["Title","Value"];
        let tableHeader = TableMaker.constructHeaderRow(colNames);
        let tableRows = [];
  
        for (let dataPoint of dataset.data) {
          tableRows.push(TableMaker.constructRow(getLabel(), [String(dataPoint)]));
        }
        dataStr += TableMaker.constructTable(tableHeader, tableRows);
        dataStr += "<br/>";
      });
  
      const par = document.createElement('p');
      par.innerHTML = dataStr;
      chart.canvas.appendChild(par);
  
      // For debugging, display table data as well
      // let dataTableParent = document.getElementById('acquisitionsData');
      // dataTableParent.innerHTML = dataStr;
  
      // chart.data.datasets.forEach((dataset) => {
      //   dataStr += `${dataset.label}<br/>`;
      //   for (let i=0; i < dataset.data.length; i++) {
      //     let label = 'unknown';
      //     if (i < barLabels.length) {
      //       label = barLabels[i];
      //     }
      //     dataStr += `[${label}]: ${dataset.data[i]}<br/>`;
      //   }
      //   dataStr += "<br/>";
      // });
    }
  };