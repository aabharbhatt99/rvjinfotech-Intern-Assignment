import React, {useState} from 'react'
import {Link} from "react-router-dom"

export default function CreateUser() {

    const [values, setValues] = useState({
        id: "",
        name: "",
        email: "",
        gender: "",
        status: false
    })
    // const [isChecked, setIsChecked] = useState(false);

    const{id, name, email, gender, status} = values;

    const handleChange = (name) => (event) => {
        const value = event.target.value;
        // formData.set(name, value);
        setValues({...values, [name]: value})
    }

    const handleCheckboxChange = (event) => {
        setValues({...values, status: !!!status})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values})
        console.log(values);
    }

    const createForm = () => (
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
                    <option>
                        Male
                    </option>
                    <option>
                        Female
                    </option>
                    <option>
                        Others
                    </option>
                </select>
            </div>

            <label>
            <span style={{fontWeight: "bold", fontSize:"22px"}} className="m-5" >Status:-</span>
            <br />
            <span style={{fontSize:"22px"}} className="mx-5"> Active</span>
            <input
                type="checkbox"
                name="status"
                onChange={handleCheckboxChange}
            />
            </label>
            <br />

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-success mb-3"
            >
                Create Product
            </button>
        </form>
    )

    return (
        <div style={{backgroundColor: "black"}}>
            <Link to="/home" className="btn btn-info" >Back</Link>
            <h1 style={{fontWeight: "bold", fontSize: "45px"}} className="text-center text-white" >Create User</h1>            

            <div className="bg-info container-xxl">
                <br />
                {createForm()}
            </div>
        </div>
    )
}
