import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {

    state={
        user:"",
        email:"",
        pwd:"",
        phn:"",
        role:""
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit = (e)=>{
        e.preventDefault()
        const acc ={...this.state};
        console.log(this.state)
        const url=`https://crud-operations-b0f16-default-rtdb.firebaseio.com/Accounts.json`;
        axios.post(url,acc).then((resp)=>{
            if(resp.status === 200)
            {
                this.props.history.push("/show");
                this.setState({
                    user:"",
                    email:"",
                    pwd:"",
                    phn:"",
                    role:""
                });
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
                <div className="card text-white bg-secondary text-center" style={{padding:'50px',width:'100%',height:'665px'}} >
                <div  className="container col-4">
                       <h1>Registration</h1>
                  <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                      <label ntmlfor="username">USERNAME</label>
                         <input type="text" className="form-control" id="user" name="user" value={this.state.user} onChange={this.handleChange} placeholder="Username" />
                     </div>
                     <div className="form-group">
                      <label ntmlfor="password">PASSWORD</label>
                        <input type="password" className="form-control" id="pwd" name="pwd" value={this.state.pwd}  onChange={this.handleChange}  placeholder="Password" />
                     </div>
                     <div className="form-group">
                      <label ntmlfor="email">EMAIL ADRESS</label>
                        <input type="email" className="form-control" id="email" name="email" value={this.state.email}  onChange={this.handleChange}  placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                      <label ntmlfor="phonnumber">PHONE NUMBER</label>
                        <input type="phn" className="form-control" id="phn" name="phn" value={this.state.phn}  onChange={this.handleChange}  placeholder="Phone number" />
                      </div>
                      <div className="form-group">
                        <label ntmlfor="designation">DESIGNATION</label>
                        <input type="text" className="form-control" id="role" name="role" value={this.state.role}  onChange={this.handleChange}  placeholder="Designation" />
                      </div>    
                         <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                  </div>
                  </div>
        )
    }
}
