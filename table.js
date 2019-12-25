import React from 'react';
import './table.css';
import Modal from './add';


class Table extends React.Component {
    constructor(props){
        super(props);

        this.state= {
           result: [],
           show: false
          
        }

        this.showModal = this.showModal.bind(this)
    

        
    }

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    

   componentDidMount(){
       fetch("https://my-json-server.typicode.com/dinoreborn/demo/employees")
       .then (promise => promise.json())

       .then(actualResponse => {
           console.log("inside component did mount")
           console.table( actualResponse);
           this.setState({result: actualResponse});
       }).catch(error => {
           console.log(error);
       })
   }

  

   delete(k){
  
    console.log("the index for the element is =" + k)

    // var arr = this.state.result;
    // for(var i=0; i<=arr.length; i++){
    //     if(i==k)
    //     continue;
    //     var newArr = newArr.push(...arr);
    // }

    // this.setState(prevState => ({
    //     ...prevState.result,
    //     result: newArr
    // }))

    // console.log("the deleted id for the array is =" + newArr[k]["id"])
    // console.log("the new array is = " + JSON.stringify(this.state.result))
    
     var a = [...this.state.result]
     a.splice(k,1)

     this.setState(() => ({
     result: a 
      }))
      console.log("the deleted id for the array is =" + this.state.result[k]["id"])
      
    }

    render(){
        return(
            <div>
          <section>
                <header>
                <div className = "col">Button</div>
                <div><button  onClick={e => {
                 this.showModal();
                 }}> Add </button>
             </div>
                <div className = "col">ID</div>
                <div className = "col">Email</div>
                <div className = "col">First Name</div>
                <div className = "col">Last Name</div>
                </header>

            <div class="line-break"></div>

            <body>
              {this.state.result.map((data, i) => {
                return (

                    
                  <div className = "row" key={i}>
                      
                      <div className = "col">
                        <button name = "button" onClick ={this.delete.bind(this, i)} ></button>
                        Delete
                    </div>

                    
                    <div className = "col">
                        <input name = "id" type = "number" value = {data.id} ></input>
                    </div>
                    <div className = "col">
                    <input  name = "email" type = "email" value = {data.email}></input>
                    </div>
                    <div className = "col">
                        <input  name = "first_name" type = "text" value = {data.first_name} ></input>
                    </div>
                    <div className = "col">
                        <input name = "last_name" type = "text" value = {data.last_name} ></input>
                    </div>
                  </div>
                )
              })}
            </body>

          </section>

          {<div className = "col">
                    <Modal onClose = {this.showModal} show = {this.state.show}/>
                        
            </div>}
        </div>
        )
    }
}

export default Table;