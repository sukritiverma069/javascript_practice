import React from 'react';
import './App.css';
import './Grid.css';
import './normalize.css';




class SearchPAge extends React.Component{
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
    // <div className = "search-container">
    // <input type="text" placeholder="Search.." name="search" value = {this.state.queryText} onChange= {this.handleQueryText} ></input>
    // <button type="submit"  onClick = {this.submit}><ion-icon name="search"></ion-icon></button>
    <div class="wrap">
   <div class="search">
   <input type="text" class="searchTerm" placeholder="What are you looking for?" value = {this.state.queryText} onChange= {this.handleQueryText}></input>
      <button type="submit" class="searchButton"  onClick = {this.submit}>
      <ion-icon name="search"></ion-icon>
     </button>
   </div>

    

    <div className = "row">
    
    {this.state.allURLs.length > 0 ? this.state.allURLs.map( (p) => 
    {return(
    <div className = "col span-1-of-4 box"><img id= {p.imageId} width="277" height="200" src = {p.imageUrl} alt="image"></img>
    <figcaption className= "figcap"><ion-icon name="add"></ion-icon><a id = {p.imageId} href= "newTab">add caption</a>
    {console.log("the clicked image ID is = " + p.imageId)}</figcaption>
    
    </div>)
    }): <div></div>}
    
    </div>
    
    </div>)
}
}

export default SearchPAge;
