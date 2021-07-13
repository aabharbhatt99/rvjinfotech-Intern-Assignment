import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function DetailTable() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://gorest.co.in/public-api/users")
      .then((response) =>{
        console.warn(response)
        setUsers(response.data.data)
      }
      );
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div style={{backgroundColor: "black"}}>
      <div>
        <Link to="/createUser" className="btn btn-success btn-lg float-end m-2" type="submit">New User</Link>
        <h1 className="text-center text-white m-5" >Detail Table</h1>
      </div>
      <table className="container-fluid table table-info table-hover table-bordered table-fixed">
        <thead className="thead-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <Link to={{pathname: "/showUser", state: user}} className="btn m-2">Show</Link>
                  <Link to="/editUser" className="btn m-2">Edit</Link>
                  <button className="btn m-2">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
