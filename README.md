# Belly Button Biodiversity Dashboard

Welcome to the Belly Button Biodiversity Dashboard! This interactive dashboard allows you to explore the fascinating world of microbes that colonize human navels.

## Before You Begin

1. Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.

2. Clone the new repository to your computer.

3. Copy the files from the StarterCode folder contained within the Module 14 Challenge zip file (index.html, samples.json, and the static folder).

4. Push the changes to GitHub.

5. Deploy the new repository to GitHub Pages.

## Files

Download the following files to help you get started:

[Module 14 Challenge files](https://your-link-here)

## Instructions

Complete the following steps:

### Use D3 to Read Data

Use the D3 library to read in samples.json from the URL [https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

### Bar Chart (30 points)

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Chart initializes without error (10 points)
- Chart updates when a new sample is selected (5 points)
- Chart uses Top 10 sample values as values (5 points)
- Chart uses otu_ids as the labels (5 points)
- Chart uses otu_labels as the tooltip (5 points)

### Bubble Charts (40 points)

Create a bubble chart that displays each sample.

- Chart initializes without error (10 points)
- Chart updates when a new sample is selected (5 points)
- Chart uses otu_ids for the x values (5 points)
- Chart uses otu_ids for marker colors (5 points)
- Chart uses sample_values for the y values (5 points)
- Chart uses sample_values for the marker size (5 points)
- Chart uses `otu_labels` for text values (5 points)

### Metadata and Deployment (30 points)

Display the sample metadata, i.e., an individual's demographic information.

- Metadata initializes without error (10 points)
- Metadata updates when a new sample is selected (10 points)
- App Successfully Deployed to Github Pages (10 points)

### Advanced Challenge Assignment (Optional with no extra points earning)

Adapt the Gauge Chart from [Plotly Gauge Charts](https://plotly.com/javascript/gauge-charts/) to plot the weekly washing frequency of the individual.

- Modify the example gauge code to account for values ranging from 0 through 9.
- Update the chart whenever a new sample is selected.

## Requirements

- Regular commits
- Thorough README.md file

## Have Fun Exploring the Microbial World! 🦠🔬
