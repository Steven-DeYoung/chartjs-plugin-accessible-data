import { buildDataTable } from './dataTableBuilder';

export const bubbleData = {
    id: 'bubbleData',
    afterDatasetsUpdate(chart, args, options) {
      // TODO: Add option to disable tabledata
      let dataStr = "";
      let labelIndex = 0;

      chart.data.datasets.forEach((dataset) => {
        let rowNames = chart.data.labels.slice(labelIndex, labelIndex + dataset.data.length);
        labelIndex += rowNames.length;

        let colNames = ["Title"];
        for (let key in dataset.data[0]) {
          colNames.push(key);
        }

        dataStr += `Table of dataset "${dataset.label}":<br/>`;
        dataStr += buildDataTable(rowNames, colNames, dataset);
      });

      // TODO: Could this be simplified if buildDataTable returned a <table> dom object?
      const par = document.createElement('p');
      par.innerHTML = dataStr;
      chart.canvas.appendChild(par);

      // For debugging, display table data as well
      // let dataTableParent = document.getElementById('dimensionsData');
      // dataTableParent.innerHTML = dataStr;
    }
  };