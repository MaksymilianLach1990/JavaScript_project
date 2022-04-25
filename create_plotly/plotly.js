
// graf punktowy
const scatterPlots = document.getElementById("scatter-plots");
const ctx = scatterPlots.getContext("2d");
scatterPlots.height = scatterPlots.width;
ctx.transform(1, 0, 0, -1, 0, scatterPlots.height)

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

// funkcja liniowa
const lineGraphs = document.getElementById("line-graphs");
const ctx2 = lineGraphs.getContext("2d");
ctx2.fillStyle = "#FF0000";
lineGraphs.height = lineGraphs.width;
ctx2.transform(1, 0, 0, -1, 0, lineGraphs.height)

let xMax = lineGraphs.height;
let slope = 1.2;
let intercept = 70;

ctx2.moveTo(0, intercept);
ctx2.lineTo(xMax, f(xMax));
ctx2.strokeStyle = "black";
ctx2.stroke();

function f(x) {
  return x * slope + intercept;
};

////////////////////////////////////////////////////////////////////////


// graf kołowy z procentami
let xCountry = ["Italy", "France", "Spain", "USA", "Argentina"];
let yPercent= [55, 49, 44, 24, 15];

let layout = {title: "Pierwsza pizza"};

let data = [{labels: xCountry, values: yPercent, type:"pie"}];

Plotly.newPlot("pieCharts", data, layout);

// graf słópkowy

let dataBar =[{
    x: xCountry,
    y: yPercent,
    type: "bar",
    orientation: "h",
    marker: {color: "darkBlue"}
}];

let layoutBar = {title: "Digram słupkowy"};

Plotly.newPlot("horizontal-bar", dataBar, layoutBar);

////////////////////////////////////////////////////

// Graf multiple line
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("multiple-lines", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});