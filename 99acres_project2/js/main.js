
const ctx = document.getElementById('myChart');
var pieChartJson = myGraphObject;
var graphDataKeys = Object.keys(pieChartJson)
var graphDataValues = graphDataKeys.map( (k) => pieChartJson[k])

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
    maintainAspectRatio: true,
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 1500,
                fontSize : 20,
                stepSize : 200
            }
        }],
        xAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                fontSize : 20,
                stepSize : 1
            }
        }]
    },
    legend: {
        display: true,
        labels: {
            fontSize: 20,
             }
     }

}

});

const ctx1 = document.getElementById('myBarChart');
var myBarChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: graphDataKeys,
        datasets: [
          {
            label: "June ",
            data: [10, 50, 25, 70, 40],
            backgroundColor: [
              "rgba(10,20,30,0.3)",
              "rgba(10,20,30,0.3)",
              "rgba(10,20,30,0.3)",
              "rgba(10,20,30,0.3)",
              "rgba(10,20,30,0.3)"
            ],
            
            borderColor: [
              "rgba(10,20,30,1)",
              "rgba(10,20,30,1)",
              "rgba(10,20,30,1)",
              "rgba(10,20,30,1)",
              "rgba(10,20,30,1)"
            ],
            borderWidth: 1
          },
          {
            label: "July",
            data: [20, 35, 40, 60, 50],
            backgroundColor: [
              "rgba(50,150,200,0.3)",
              "rgba(50,150,200,0.3)",
              "rgba(50,150,200,0.3)",
              "rgba(50,150,200,0.3)",
              "rgba(50,150,200,0.3)"
            ],
            borderColor: [
              "rgba(50,150,200,1)",
              "rgba(50,150,200,1)",
              "rgba(50,150,200,1)",
              "rgba(50,150,200,1)",
              "rgba(50,150,200,1)"
            ],
            borderWidth: 1
          }
        ]
      },

      options: {
        responsive: true,
        title: {
          display: true,
          position: "top",
          text: "Properties Updated",
          fontSize: 20,
          fontColor: "#111"
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#333",
            fontSize: 20
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0
            }
          }]
        }
    },
});


const ctx3 = document.getElementById("myMixedChart")
var mixedChart = new Chart(ctx3, {
    type: 'bar',
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
    maintainAspectRatio: true,
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 1500,
                fontSize : 20,
                stepSize : 200
            }
        }],
        xAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                fontSize : 20,
                stepSize : 1
            }
        }]
    },
    legend: {
        display: true,
        labels: {
            fontSize: 20,
             }
     }

}

});
    
/*const ctx4 = document.getElementById("myRadarChart")
var myRadarChart = new Chart(ctx4, {
    type: 'radar',
    data: {
        labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
        datasets: [{
          label: "Student A",
          backgroundColor: "rgba(200,0,0,0.2)",
          data: [65, 75, 70, 80, 60, 80]
        }, {
          label: "Student B",
          backgroundColor: "rgba(0,0,200,0.2)",
          data: [54, 65, 60, 70, 70, 75]
        }]
      }
      Options = {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20
          },
          pointLabels: {
            fontSize: 18
          }
        },
        legend: {
          position: 'right'
        }
      };
       
      
});  */        
























