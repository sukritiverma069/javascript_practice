import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import '../src/components/stylesLogin.css'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {

  state = {
    redirectToReferrer: false,
    userCredentials: {}
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  handleInputChange =(event)=>{
   
    let changedKey = event.target.name;
    let changedValue = event.target.value;
    console.log("the changed key is = " + changedKey)
    console.log("the changed value is = " + changedValue)
                    
     this.setState(prevState => ({
      userCredentials: { 
                        // object that we want to update
          ...prevState.userCredentials,    // keep all other key-value pairs
          [changedKey]: changedValue,    // update the value of specific key
          
      }
  }))
  
  
  
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      
        
      <div>
      <div className = "form">
          <form>
          <div className = "header">
                  <p>Sign In</p>
          </div>

          <div className = "row">
              <input type = "text" name = "username" id = "username" placeholder = "Username" value = {this.state.userCredentials["username"]} onChange = {this.handleInputChange}></input>
          </div>

          <div className = "row">
              <input type = "password" name = "password" id = "password" placeholder = "Password" value = {this.state.userCredentials["password"]} onChange = {this.handleInputChange}></input>
          </div>

          <div className = "row">
          <div>
                  <button className ="btn" onClick = {this.login}>Login</button>
          </div>
          </div>
            
           

           </form>
      </div>
  </div>
      
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

export default function AuthExample () {
  return (
    <Router>
      <div>
        <AuthButton/>
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
  )
}