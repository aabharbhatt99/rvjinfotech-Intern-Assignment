import React, {useState} from 'react'
import { TablePagination } from 'react-pagination-table';

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
        }
    ])
    
    const createNewUser = () => {
        setUsers([...users, {colNo: 4, userName: 'Aadhar', email:'aadhar@gmail.com', gender: 'M'}]);
    }
    
    //header for table pagination
    const Header = ["ColNo", "Name", "Email"];

    return (
        <div>
            <h1 className="text-center">Detail Table</h1>
            <div>
                <button className="btn btn-success btn-lg float-end m-2" type="submit" onClick={createNewUser}>New User</button>
            </div>
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
            

            <div>
                <TablePagination
                    title="User Details"
                    subTitle="Sub Title"
                    headers={ Header }
                    data={ [
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
                        {
                            colNo: 4,
                            userName: 'Aabhar', 
                            email:'aabhar@gmail.com',
                            gender: 'M',
                        },
                        {
                                colNo: 5,
                                userName: 'Bhavesh', 
                                email:'bhavesh@gmail.com',
                                gender: 'M',
                        },
                        {
                                colNo: 6,
                                userName: 'Apoorva', 
                                email:'apoorva@gmail.com',
                                gender: 'F',
                        }
                    ] }
                    columns="colNo.userName.email"
                    perPageItemCount={ 5 }
                    totalCount={ users.length }
                    arrayOption={ [["size", 'all', ' ']] }
                />
            </div>
        </div>
    )
}
