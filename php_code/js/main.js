/*Now that we have our database data in our JavaScript array objects, we can close the database connection.*/

window.onload=function(){
    zingchart.render({
        id:"myChart",
        width:"100%",
        height:400,
        data:{
        "type":"bar",
        "title":{
            "text":"Data Pulled from MySQL Database"
        },
        "scale-x":{
            "labels":myLabels
        },
        "series":[
            {
                "values":myData
            }
    ]
    }
    });
    };