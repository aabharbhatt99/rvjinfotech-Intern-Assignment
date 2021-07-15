import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios";

const ShowUser = (props) => {

    const userId = props.location.state
    const [user, setUser] = useState([])

    const fetchData = (userId) => {
    return axios
      .get(`https://gorest.co.in/public-api/users/${userId}`)
      .then((response) =>{
        setUser(response.data.data)
      }
      );
    };

    useEffect(() => {
        fetchData(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="py-5" style={{backgroundColor: "black"}}>
            <Link to="/home" className="btn btn-info mx-5" >Back</Link>
            <h1 className="text-center text-white">User Details</h1>

            <div className="container-fluid bg-info p-5">
                <div className="">
                    <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                        <span className="alert alert-danger rounded">ID:</span>  
                        <span className="px-3 mx-3 alert alert-success">{user.id}</span>
                    </h3>
                    
                    <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                        <span className="alert alert-danger rounded">Name:</span>  
                        <span className="px-3 mx-3 alert alert-success">{user.name}</span>
                    </h3>
                    
                    <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                        <span className="alert alert-danger rounded">Email:</span>  
                        <span className="px-3 mx-3 alert alert-success">{user.email}</span>
                    </h3>
                    
                    <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                        <span className="alert alert-danger rounded">Gender:</span>
                        <span className="px-3 mx-3 alert alert-success">{user.gender}</span>
                    </h3>

                    <h3 className="border rounded border-dark p-4 " style={{backgroundColor: "grey"}} >
                        <span className="alert alert-danger rounded">Status:</span>
                        <span className="px-3 mx-3 alert alert-success">{user.status}</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}


export default ShowUser;