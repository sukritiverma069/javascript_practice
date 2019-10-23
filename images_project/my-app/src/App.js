import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
  super(props);
  this.state= {
    queryText: "",
    allURLs: []
    
  }
  
    this.submit = this.submit.bind(this);
    this.handleQueryText = this.handleQueryText.bind(this)
  }


  

  handleQueryText(event){
    let changedValue = event.target.value;
                  
     this.setState(
      {queryText:changedValue}  
         )
  console.log(this.state.queryText)
  }



  submit(){
    console.log("calling the submit function " + this.state.queryText)
    fetch('https://pixabay.com/api/?key=14027279-33ff5370254d98e54023bf388&q='+this.state.queryText)
    .then(promise => promise.json())
       
        .then( actualResponse => {
          var imageUrlsFromResponse = []
          for(var i=0; i<= actualResponse.hits.length-1; i++){
            var imageObj = {}
            imageObj.imageId = i
            imageObj.imageUrl = actualResponse.hits[i]["webformatURL"]
            imageUrlsFromResponse = imageUrlsFromResponse.concat(imageObj)
            console.log("image obj  = " + imageObj.imageUrl )
            
          }
        

          this.setState(prevState => ({
                allURLs:imageUrlsFromResponse 
                 
        }))
            
             }).catch(error => {
            console.log(error);
        });

        

          
  }

  
  



render(){
  return(
    <div classname = "search-container">
    <input type="text" placeholder="Search.." name="search" value = {this.state.queryText} onChange= {this.handleQueryText} ></input>
    <button type="submit"  onClick = {this.submit}>Search</button>
    <p>Image to use:</p>
    <div>
    {this.state.allURLs.length > 0 ? this.state.allURLs.map( (p) => 
    {return(<img id= {p.imageId} width="220" height="277" src = {p.imageUrl} alt="image"></img>)}): <div>Enter your image search text</div>}
    </div>
    </div>)
}
}

export default App;
