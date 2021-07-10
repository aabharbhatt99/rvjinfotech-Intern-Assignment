import React, {useState} from 'react'

export default function DetailTable() {
    const [users, setUsers] = useState([
        {
        colNo: 1,
        userName: 'Aabhar', 
        email:'aabhar@gmail.com',
        gender: 'M',
        },
        {
            colNo: 2,
            userName: 'Bhavesh', 
            email:'bhavesh@gmail.com',
            gender: 'M',
        },
        {
            colNo: 3,
            userName: 'Apoorva', 
            email:'apoorva@gmail.com',
            gender: 'F',
        },
    ])
    
    const createNewUser = (newUser) => {
        setUsers([...users, newUser]);
    }

    return (
        <div className="text-center">
            <h1 className="text-center">Detail Table</h1>
            <table className="container-fluid table table-info table-hover table-bordered table-fixed">
                <thead className="thead-light">
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( user => {
                        return(
                            <tr>
                                <td>{user.colNo}</td>
                                <td>{user.userName}</td>
                                <td>
                                    <a href="/" className="m-2">Show</a>
                                    <a href="/" className="m-2">Edit</a>
                                    <a href="/" className="m-2">Delete</a>
                                </td>
                            </tr>
                        )
                    } )}
                </tbody>
            </table>
        </div>
    )
}
