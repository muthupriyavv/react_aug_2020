import React from 'react';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
           count : parseInt(this.props.since)
        }
       
    }

    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    increaseCount(){
        this.setState({count: this.state.count + 1});
        
    }

    decreaseCount(){
        this.setState({count: this.state.count - 1});
    }
  
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.state.count}</td>
                <td>
                    <button  onClick={() => this.increaseCount()}>Since + </button>
                </td>
                <td>
                    <button onClick={() => this.decreaseCount()}>Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;