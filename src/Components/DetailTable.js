import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function DetailTable() {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState(0)
  const [showing, setShowing] = useState([])
  const [deletedId, setDeletedId] = useState([])

  //making pages array
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  const sizeOfUsers = users.length
  const pages = range(1, Number(sizeOfUsers/5));
  //

  const fetchData = () => {
    return axios
      .get("https://gorest.co.in/public-api/users")
      .then((response) =>{
        setUsers(response.data.data)
        setShowing(response.data.data.slice(current, current+5))
      }
      )
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const deleteUser = (userId) => {
    return axios
    .delete(`https://gorest.co.in/public-api/users/${userId}`)
    .then((res) => {
      setDeletedId([...deletedId, userId])
    })
  }

  return (
    <div style={{backgroundColor: "black"}}>
      <div>
        <Link to="/createUser" className="btn btn-success btn-lg float-end m-2" type="submit">New User</Link>
        <h1 className="text-center text-white m-5" style={{fontSize: "50px", fontWeight: "bold"}} >Detail Table</h1>
      </div>
      <table className="container-xxl table table-info table-hover table-bordered table-fixed">
        <thead className="thead-light">
          <tr>
            <th scope="col" style={{fontSize: "25px", fontWeight: "bold"}} >id</th>
            <th scope="col" style={{fontSize: "25px", fontWeight: "bold"}} >Name</th>
            <th scope="col" style={{fontSize: "25px", fontWeight: "bold"}} >Action</th>
          </tr>
        </thead>
        <tbody>

          {showing.map((user) => {
            const isUserDeleted = deletedId.includes(user.id)
            return (
              <tr key={user.id}>
                <td style={{fontSize: "20px"}} >{user.id}</td>
                <td style={{fontSize: "25px"}} >{user.name}</td>
                <td>
                  <Link to={{pathname: "/showUser", state: user.id}} className="btn m-2 btn-success">Show</Link>
                  <Link to={{pathname: "/editUser", state: user.id}} className="btn m-2 btn-primary">Edit</Link>
                  {
                    isUserDeleted ?
                    <button className="btn m-2 btn-danger disabled" onClick={()=> deleteUser(user.id)}>Deleted</button>
                    :
                    <button className="btn m-2 btn-danger" onClick={()=> deleteUser(user.id)}>Delete</button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pager */}
      <div className= "text-white display-6 text-center">
        { 
          pages.map( (pageNo) => {
            return (
              <button key={pageNo} className="btn btn-info" onClick={() => {setCurrent((pageNo-1)*5)} }>{pageNo}</button>
            )
        } )}
      </div>
    </div>
  );
}
