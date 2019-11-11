import React from 'react';
import './newtab.css';
import SearchPAge from './searchPage';




class Newtab extends React.Component{

     function() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("scream");
        ctx.drawImage(img, 10, 10);
      };
    
    render(){

return(

    
    <div>
        <div>
        <p>Image to use:</p>
        
    <img id="scream" width="220" height="277" src= "" alt="The Scream"></img>
    </div>

        
      <div class = "canvas">
    <canvas width = "200px" height="400px"></canvas>
    </div>
    <div class = "canvas">
    <canvas id = "myCanvas" width = "200px" height= "385px"></canvas>
    
    </div>
    </div>
    
    
        )
    }
}

export default Newtab;