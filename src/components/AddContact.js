import React from "react";

class AddContact extends React.Component{
    state ={
        name: "",
        email: "",
    }

    add =(e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email=== ""){
            alert("Fill all fields!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
    }
    render(){
    return(
        <div className="m-5 w-75">
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="name" className="form-control" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" placeholder="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
            <button className="btn btn-outline-primary">Add</button>
        </form>
        </div>
    )
}
}

export default AddContact;