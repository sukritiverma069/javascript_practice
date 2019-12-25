import React from 'react'; 
import './add.css'

class Modal extends React.Component {
    constructor(props){
        super(props);

        this.state={
            credentials: []
        }

        this.closePopup= this.closePopup.bind(this)
       
    }

    closePopup = e =>{
        this.props.onClose && this.props.onClose(e)
    }

    handleInputChange(event) {
        console.log("handleinput change was called")
        
     let changedKey = event.target.name;
     let changedValue = event.target.value;
 
     this.setState(prevState => ({
         ...prevState.credentials,
         [changedKey]: changedValue,
     }))
 
     console.log("the changed value is = " + changedKey)
        
    }

    

    

    render(){

        if(!this.props.show){
            return null;
        }else{
            return(



                <div class = "form-input">
                    
                    
                    <form className = "popup-inner">
                        <div className = "form-row">
                            <label className= "form-row" for = "firstname" >FirstName:</label>
                            <input type = "text" name ="firstname" placeholder = "FirstName" value = {this.state.credentials["firstname"]} onChange = {this.handleInputChange} ></input>
                        </div>
                        <div className = "form-row">
                        <label className= "form-row" for = "firstname" >Lastname:</label>
                            <input type = "text" name ="lastname" placeholder = "LastName" value = {this.state.credentials["lastname"]} onChange = {this.handleInputChange}></input>
                        </div>
    
                        <div className = "form-row">
                        <label className= "form-row" for = "firstname" >Email:</label>
                            <input type = "email" name ="email" placeholder = "Email" value = {this.state.credentials["email"]} onChange = {this.handleInputChange}></input>
                        </div>
                        <div className = "form-row">
                            <button>Submit</button>
                        </div>
                        <div className = "form-row">
                            <button>Close</button>
                        </div>
    
                    </form>
                </div>
                
                
            )
        }
        
    }
}

export default Modal;