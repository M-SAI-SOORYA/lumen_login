import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './log.css';
import Swal from 'sweetalert2';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // Add state for role
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('', { name, email, password, role }) // Include role in the request
            .then(result => {
                if (result.data === "Already registered") {
                    alert("Already Registered!")
                    navigate('/login');
                } else {
                    Swal.fire({
                        title: 'Registered Successfully',
                        text: 'E-mail already registered! Please Login to proceed.',
                        icon: 'info',
                        confirmButtonText: 'OK'
                    });
                    navigate('/login');
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div>
                    <h1>Telecom Inventory Management System</h1>
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center flex-grow-1 px-3">
                    <div
                        className="p-4 w-100 backk"
                        style={{ maxWidth: '700px', border: '2px solid yellow', borderRadius: '10px' }}
                    >
                        <h2 className="mb-3 text-primary text-center">Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleInputName" className="form-label">
                                    <strong>Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="form-control"
                                    id="exampleInputName"
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    <strong>Email Id</strong>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="roleSelect" className="form-label">
                                    <strong>Role</strong>
                                </label>
                                <select
                                    id="roleSelect"
                                    className="form-control"
                                    onChange={(event) => setRole(event.target.value)}
                                    required
                                >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Register</button>
                        </form>
                        <p className="mt-3 text-center" style={{ color: "yellow" }}>Already have an account?</p>
                        <Link to="/login" className="btn btn-secondary w-100">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
