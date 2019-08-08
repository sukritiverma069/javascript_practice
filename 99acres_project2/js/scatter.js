const ctx5 = document.getElementById("myScatterChart")
var myScatterChart = new Chart(ctx5, {
    type: 'scatter',
    data: {
        datasets: [{
            label: graphDataKeys,
            data: graphDataValues
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});