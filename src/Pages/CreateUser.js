import React from 'react'
import {Link} from "react-router-dom"

export default function CreateUser() {
    return (
        <div>
            <h1>Create User</h1>
            <Link to="/home" className="btn btn-info" >Back</Link>
        </div>
    )
}
