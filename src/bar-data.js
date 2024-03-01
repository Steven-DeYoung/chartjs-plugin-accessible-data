import { buildDataTable } from './dataTableBuilder';

export const barData = {
    id: 'barData',
    afterDatasetsUpdate(chart, args, options) {
      // TODO: Add option to disable tabledata
      let dataStr = "";
      let labelIndex = 0;

      chart.data.datasets.forEach((dataset) => {
        let rowNames = chart.data.labels.slice(labelIndex, labelIndex + dataset.data.length);
        labelIndex += rowNames.length;
        let colNames = ["Title","Value"];

        dataStr += `Table of dataset "${dataset.label}":<br/>`;
        dataStr += buildDataTable(rowNames, colNames, dataset);
      });
  
      const par = document.createElement('p');
      par.innerHTML = dataStr;
      chart.canvas.appendChild(par);
  
      // For debugging, display table data as well
      // let dataTableParent = document.getElementById('acquisitionsData');
      // dataTableParent.innerHTML = dataStr;
    }
  };