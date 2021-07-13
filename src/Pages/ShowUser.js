import React from 'react'
import {Link} from "react-router-dom"

class ShowUser extends React.Component {
    constructor(props){  
        // eslint-disable-next-line react/no-direct-mutation-state
        super(props);
        this.state = {
            data: this.props.location.state
        }
    }

    render(){
        const {data} = this.state;
        console.log(data);
        return (
            <div className="py-5" style={{backgroundColor: "black"}}>
                <Link to="/home" className="btn btn-info mx-5" >Back</Link>
                <h1 className="text-center text-white">User Details</h1>

                <div className="container-fluid bg-info p-5">
                    <div className="">
                        <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                            <span className="alert alert-danger rounded">ID:</span>  
                            <span className="px-3 mx-3 alert alert-success">{data.id}</span>
                        </h3>
                        
                        <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                            <span className="alert alert-danger rounded">Name:</span>  
                            <span className="px-3 mx-3 alert alert-success">{data.name}</span>
                        </h3>
                        
                        <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                            <span className="alert alert-danger rounded">Email:</span>  
                            <span className="px-3 mx-3 alert alert-success">{data.email}</span>
                        </h3>
                        
                        <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                            <span className="alert alert-danger rounded">Gender:</span>
                            <span className="px-3 mx-3 alert alert-success">{data.gender}</span>
                        </h3>

                        <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                            <span className="alert alert-danger rounded">Status:</span>
                            <span className="px-3 mx-3 alert alert-success">{data.status}</span>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowUser;