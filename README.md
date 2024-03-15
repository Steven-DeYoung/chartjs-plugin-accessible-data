# chartjs-plugin-accessible-data

This is a Chartjs plugin that can be used to make chart data more accessible by screen readers.
It works by rendering a hidden data table within the chart's canvas.

Currently the following types of charts are supported:
- Bar Chart (plugin object: barData)
- Bubble Chart (plugin object: bubbleData)

## Installation
Install this package as a dependency by running:
```bash
npm install --save chartjs-plugin-accessible-data
```

## Usage
The associated plugin object should be installed in each chart that needs accessible data
as follows:

```javascript
  // import the associated plugin object  
  import { <plugin object, e.g. "barData"> } from 'chartjs-plugin-accessible-data';

  new Chart(
    document.getElementById('<canvas id>'),
    {
      type: '<chart type, e.g. "bar">',
      // install the plugin object
      plugins: [ <plugin object, e.g. "barData">, <other plugins> ],
      options: ...,
      data: ...
    }
  );
```

## Development

### Building
The package is built using `parcel`, you can build with:

```bash
npm run build
```

### Testing
The testing is written with `jest`, you can run the tests with: 

```bash
npm run test
```