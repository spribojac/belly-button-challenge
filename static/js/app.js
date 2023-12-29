// Place URL in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Function to build the bar chart for top 10 OTU's found in that individual
function buildBarChart(sample) {
    d3.json(url).then((data) => {
        let sampleInfo = data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];
        // Use otu_ids as the labels for the bar chart.
        let otu_ids = valueData.otu_ids;
        // Use otu_labels as the hovertext for the chart.
        let otu_labels = valueData.otu_labels;
        // Use sample_values as the values for the bar chart.
        let sample_values = valueData.sample_values;

        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0, 10).reverse();
        let labels = otu_labels.slice(0, 10).reverse();

        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: "Top 10 OTUs Present"
        };

        Plotly.newPlot("bar", [trace], layout);
    });
}

// Function to build the bubble chart that displays each sample
function buildBubbleChart(sample) {
    d3.json(url).then((data) => {
        let sampleInfo = data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        
        let sample_values = valueData.sample_values;

        let trace1 = {
            // // Use otu_ids for the x values
            x: otu_ids,
            // Use sample_values for the y values.
            y: sample_values,
            // Use otu_labels for the text values.
            text: otu_labels,
            mode: "markers",
            marker: {
              // Use sample_values for the marker size.
                size: sample_values,
                // Use otu_ids for the marker colors.
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
        };

        Plotly.newPlot("bubble", [trace1], layout);
    });
}

// Function to build sample metadata and display the key:value pair
function buildMetadata(sample) {
  d3.json(url).then((data) => {
      let metadata = data.metadata;
      let selectedMetadata = metadata.filter((entry) => entry.id == sample)[0];
      let metadataPanel = d3.select("#sample-metadata");
      metadataPanel.html("");
      Object.entries(selectedMetadata).forEach(([key, value]) => {
          metadataPanel.append("h5").text(`${key}: ${value}`);
      });
  });
}

// Function to build the gauge chart
function buildGaugeChart(sample) {
    d3.json(url).then((data) => {
        let metadata = data.metadata;
        let value = metadata.filter((meta) => meta.id == sample);
        let obj = value[0];

        let trace = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: obj.wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 24 } },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
              axis: { range: [null, 10] },
              bar: { color: "rgb(68,166,198)" },
              steps: [
                  { range: [0, 1], color: "rgb(148,0,211)" },    // Violet
                  { range: [1, 2], color: "rgb(0,0,255)" },       // Indigo
                  { range: [2, 3], color: "rgb(0,255,0)" },       // Green
                  { range: [3, 4], color: "rgb(255,255,0)" },     // Yellow
                  { range: [4, 5], color: "rgb(255,127,0)" },     // Orange
                  { range: [5, 6], color: "rgb(255,0,0)" },       // Red
                  { range: [6, 7], color: "rgb(255,20,147)" },    // Pink
                  { range: [7, 8], color: "rgb(255,69,0)" },      // Dark Orange
                  { range: [8, 9], color: "rgb(255,140,0)" },     // Dark Gold
                  { range: [9, 10], color: "rgb(255,215,0)" }     // Gold
              ]
          }
        }];

        Plotly.newPlot("gauge", trace);
    });
}

// Initialize the dashboard at startup
function init() {
    let dropdownMenu = d3.select("#selDataset");
    d3.json(url).then((data) => {
        let names = data.names;

        names.forEach((id) => {
            dropdownMenu.append("option")
                .text(id)
                .property("value", id);
        });

        let sample_one = names[0];
        buildMetadata(sample_one);
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
        buildGaugeChart(sample_one);
    });
}

// Function that updates dashboard when sample is changed
function optionChanged(value) {
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
    buildGaugeChart(value);
}

// Call the initialize function
init();
