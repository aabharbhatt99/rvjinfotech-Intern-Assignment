import React from 'react'
import {Link} from "react-router-dom"

export default function EditUser() {
    return (
        <div>
            <h1>Edit User</h1>
            <Link to="/home" className="btn btn-info" >Back</Link>
        </div>
    )
}
