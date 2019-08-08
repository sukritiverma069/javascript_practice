
const ctx = document.getElementById('myChart');
var ChartJson = myGraphObject;
var graphDataKeys = Object.keys(ChartJson)
var graphDataValues = graphDataKeys.map( (k) => ChartJson[k])

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: graphDataKeys,
        datasets: [
            {
                label: "July Web Traffic Count",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinstyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointHoverBorderWidth: 1,
                pointHoverBorderRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth:1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: graphDataValues
            }
    ]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 1500,
                fontSize : 10,
                stepSize : 200
            }
        }],
        xAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                fontSize : 10,
                stepSize : 1
            }
        }]
    },
    legend: {
        display: true,
        labels: {
            fontSize: 10,
             }
     }

}

});

var title=new Array();
var names=new Array();


function insert(){
    var titleValue = document.getElementById('title').value;
    var nameValue = document.getElementById('name').value;
  
    
    title[title.length]=titleValue;
    names[names.length]=nameValue;
    console.log(title);
    console.log(names);
    

    
  }

function show() {
  var content="<b>All Elements of the Arrays :</b><br>";
  for(var i = 0; i < title.length; i++) {
     content +=title[i]+"<br>";
     
  }
  for(var i = 0; i < names.length; i++) {
     content +=names[i]+"<br>";
  }
  
  document.getElementById('display').innerHTML = content;
}

