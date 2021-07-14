import axios from 'axios'
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
export default class Accounts extends Component {
    state={
        Accounts:[],
        show:false,
        user:"",
        email:"",
        pwd:"",
        phn:"",
        role:"",
        id:""

    }
    componentDidMount() {
        console.log(" ")
        axios.get(`https://crud-operations-b0f16-default-rtdb.firebaseio.com/Accounts.json`).then((res)=>{
        let fetchAccounts=[]
          for(const key in res.data)
          {
              fetchAccounts.push({
                  id:key,
                  ...res.data[key]
              })
          }
          console.log(fetchAccounts)
          this.setState({
              Accounts:fetchAccounts
          })
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleDelete =(Accounts)=>{
        axios.delete(`https://crud-operations-b0f16-default-rtdb.firebaseio.com/Accounts/${Accounts.id}.json`).then((res)=>{
            console.log("deleted");
            const updateAccounts = this.state.Accounts.filter((acc)=>{
                return acc.id !== Accounts.id ? acc :null
            })
            this.setState({
                Accounts:updateAccounts
            })
    
        }).catch((err)=>{
           console.log(err)
        })
    }
 
    handleClose=()=>{
      this.setState({
        show:false
      })
    }

    handleChange =(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }
updateRecord =(acc) =>{
  const {user, email, role, phn, pwd, id} =acc;
  this.setState({
    show:true,
    user:user,
    email:email,
    role:role,
    phn:phn,
    pwd:pwd,
    id:id
  })
}

updateAccounts =()=>
{
  const url =`https://crud-operations-b0f16-default-rtdb.firebaseio.com/Accounts/${this.state.id}.json`
  const {user,email,pwd,phn,role}=this.state
  const account ={
    user,
    pwd,
    email,
    phn,
    role
  }
  axios.put(url,account).then((res)=>{
    console.log(res.status);
    this.setState({
      show:false
    })
  }).catch((err)=>{
    console.log(err)
    
  })
}
    
    render() {
        return (                
                        <div  className="card bg-secondary text-center" style={{padding:'50px',width:'100%',height:'665px'}}>
                        <table className=" table table-info">
                        <thead className="bg-danger" >
                          <tr>
                            <th scope="col">SL.NO</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">EMAIL ID</th>
                            <th scope="col">PHONE NUMBER</th>
                            <th scope="col">DESIGNATION</th>
                            <th scope="col">BUTTONS</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.Accounts.map((data,index)=> {
                                return (
                                    <tr>
                                    <td>{index+1}</td>
                                    <td>{data.user}</td>
                                    <td>{data.email}</td>
                                    <td>{data.role}</td>
                                    <td>{data.phn}</td>
                                    <button className="btn btn-danger" onClick={()=>{
                                        this.handleDelete(data)
                                    }} >DELETE</button>
                                    <button  className="btn btn-primary" onClick={(data)=>{
                                    this.updateRecord(data)
                                    }}> UPDATE</button>
                                    </tr>
                                )   
                            })
                        }
                     
                        </tbody>
                      </table>

<Modal show={this.state.show} 
animation={false}
onHide={this.handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <div className="container" >
<form onSubmit={this.handleSubmit} >
<div className="form-group">
 <label ntmlfor="username">USERNAME</label>
    <input type="text" className="form-control" id="user" name="user" value={this.state.user} onChange={this.handleChange} placeholder="Password" />
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
   <input type="phn" className="form-control" id="phn" name="phn" value={this.state.phn}  onChange={this.handleChange}  placeholder="Enter email" />
 </div>
 <div className="form-group">
   <label ntmlfor="designation">DESIGNATION</label>
   <input type="text" className="form-control" id="role" name="role" value={this.state.role}  onChange={this.handleChange}  placeholder="Password" />
 </div>    
   </form>
</div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClose} >Close</Button>
    <Button variant="primary" onClick={this.updateAccounts} >Save changes</Button>
  </Modal.Footer>
</Modal>

 </div>
        );
    }
}

