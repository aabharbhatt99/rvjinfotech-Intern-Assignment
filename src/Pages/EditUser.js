import React, {useState, useEffect} from 'react'
import {Link, useHistory} from "react-router-dom"
import axios from "axios"

export default function CreateUser(props) {
    var history = useHistory();

    const userId = props.location.state
    // const [user, setUser] = useState([])

    const fetchData = (userId) => {
    return axios
      .get(`https://gorest.co.in/public-api/users/${userId}`)
      .then((response) =>{
          console.log(response.data.data);
        setValues(response.data.data)
        // console.log(values);
      }
      );
    };

    useEffect(() => {
        fetchData(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const [values, setValues] = useState({
        id: "",
        name: "",
        email: "",
        gender: "",
        status: "active"
    });

    const{id, name, email, gender, status} = values;

    const handleChange = (name) => (event) => {
        const value = event.target.value;
        setValues({...values, [name]: value})
    }

    const handleCheckboxChange = (event) => {
        let value = status

        if(status === "inactive"){
            value = "active";
        }
        else if(status === "active"){
            value = "inactive";
        }
        setValues({...values, status: value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values})
        console.log(values);
        axios.put(`https://gorest.co.in/public-api/users/${userId}`, values);
        setTimeout(() => {
            alert("values Updated Successfully")
              history.push("/home");
            }, 2000);
    }

    function activeOrNot(status){
        if (status === "active"){
            return true;
        }
        else if(status === "inactive"){
            return false;
        }
    }

    const editForm = () => (
        <form className="container p-4">
            <span style={{fontWeight: "bold", fontSize:"22px"}} className="m-5" >ID: </span>
            <div className="form-group mx-5 p-2">
                <input
                    onChange={handleChange("id")} 
                    type="number"
                    name="id"
                    className="form-control"
                    placeholder="ID"
                    value={id}
                />
            </div>

            <span style={{fontWeight: "bold", fontSize:"22px"}} className="m-5" >Name: </span>
            <div className="form-group mx-5 p-2">
                <input
                onChange={handleChange("name")}
                name="name"
                className="form-control"
                placeholder="Name"
                value={name}
                />
            </div>

            <span style={{fontWeight: "bold", fontSize:"22px"}} className="m-5" >Email: </span>
            <div className="form-group mx-5 p-2">
                <input
                onChange={handleChange("email")}
                name="email"
                className="form-control"
                placeholder="Email"
                value={email}
                />
            </div>
            
            <span style={{fontWeight: "bold", fontSize:"22px"}} className="m-5" >Gender: </span>
            <div className="form-group mx-5 p-2">
                <select
                onChange={handleChange("gender")}
                name="gender"
                className="form-control"
                placeholder="Gender"
                value={gender}
                >
                    <option>Select Gender</option>
                    <option>male</option>
                    <option>female</option>
                    <option>Others</option>
                </select>
            </div>

            <label>
            <span style={{fontWeight: "bold", fontSize:"22px"}} className="m-5" >Status:-</span>
            <br />
            <span style={{fontSize:"22px"}} className="mx-5"> Active</span>
            <input
                type="checkbox"
                name="status"
                value={activeOrNot(status)}
                checked={activeOrNot(status)}
                onChange={handleCheckboxChange}
            />
            </label>
            <br />

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-success mb-3"
            >
                Update User
            </button>
        </form>
    )

    return (
        <div style={{backgroundColor: "black"}}>
            <Link to="/home" className="btn btn-info" >Back</Link>
            <h1 style={{fontWeight: "bold", fontSize: "45px"}} className="text-center text-white" >Edit User</h1>            

            <div className="bg-info container-xxl">
                <br />
                {editForm()}
            </div>
        </div>
    )
}
