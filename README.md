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

### Setup

- [prettier](https://prettier.io/) is used to ensure consistent formating.
- [pre-commit](https://pre-commit.com/index.html) is used to run checks before committing, including `prettier`.
  To setup these checks:

1. Install python & pip (dependencies for pre-commit).
1. Run `pip install -r requirements-dev.txt`
   - Note that you may get a warning about adding pre-commit to your path, this is optional.
1. Run `python -m pre_commit install`
1. That's all, `pre-commit` will now run automatically with each commit you make.

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
