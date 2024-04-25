import Admin_login from "../Auth/Admin_login"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/get-form-data")
        .then(response => {
            setFormData(response.data);
        })
        .catch(error => {
            console.error("ERROR FETCHING THE DATA ERROR NUMBER 1!")
        })

        const isLoggedIn = localStorage.getItem('userToken');

        if (!isLoggedIn) {
            navigate('/adminlogin');
        }      
[]
},
 [navigate]);  
 useEffect(() => {
    // Only attempt to fetch data if the user is logged in
    const isLoggedIn = localStorage.getItem('userToken');
    if (isLoggedIn) {
        axios.get("http://127.0.0.1:5000/get-form-data")
        .then(response => {
            setFormData(response.data);
        })
        .catch(error => {
            console.error("ERROR FETCHING THE DATA ERROR NUMBER 1!");
        });
    }
}, []); // This effect does not depend on navigate, so it's not included in the dependency array

    return (
        <>
            
        </>
    );
}

export default Admin ; 