import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignUp() {

    const [inputData, setInputData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    })

    const navigate = useNavigate()

    const handelInputChange = (e) => {
        const { name, value } = e.target
        // console.log(value);
        setInputData((preValue) => ({
            ...preValue,
            [name]: value
        }))
        clearError("username")
        clearError("email")
        clearError("password")
        clearError("confirmPassword")
        clearError("role")
    }

    const clearError = (field) => {
        document.getElementById(field + "Error").innerHTML = ''
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        let username = document.getElementById("username").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let confirmPassword = document.getElementById("confirmPassword").value
        // let role = document.getElementById("role").value

        if (!username) {
            document.getElementById("usernameError").innerHTML = "Please enter the Username!"
            document.getElementById("username").focus()
            return false
        } else if (!email) {
            document.getElementById("emailError").innerHTML = "Please enter the Email!"
            document.getElementById("email").focus()
            return false
        } else if (!password) {
            document.getElementById("passwordError").innerHTML = "Please enter the Password!"
            document.getElementById("password").focus()
            return false
        } else if (!confirmPassword) {
            document.getElementById("confirmPasswordError").innerHTML = "Please enter the Confirm Password!"
            document.getElementById("confirmPassword").focus()
            return false
        } else if (confirmPassword !== password) {
            document.getElementById("confirmPasswordError").innerHTML = "Confirm Password and Password should be match!"
            document.getElementById("confirmPassword").focus()
            return false
        } else {
            alert('Registration successfully')
            setInputData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                role: ''
            })
            navigate('/signIn')
            return true
        }
        // else if (role === "default") {
        //     document.getElementById("roleError").innerHTML = "Please select the role!"
        //     document.getElementById("role").focus()
        //     return false
        // }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">

                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Username</label>
                            <input value={inputData.username} onChange={handelInputChange} type="text" id='username' name='username' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                            <span id='usernameError' className='text-red-600'></span>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Email</label>
                            <input value={inputData.email} onChange={handelInputChange} type="text" id='email' name='email' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                            <span id='emailError' className='text-red-600'></span>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password</label>
                            <input value={inputData.password} onChange={handelInputChange} type="password" id='password' name='password' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                            <span id='passwordError' className='text-red-600'></span>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Confirm Password</label>
                            <input value={inputData.confirmPassword} onChange={handelInputChange} type="password" id='confirmPassword' name='confirmPassword' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                            <span id='confirmPasswordError' className='text-red-600'></span>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Join As</label>
                            <select value={inputData.role} onChange={handelInputChange} name="role" id="role" className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white">
                                {/* <option value="default">Join As</option> */}
                                <option value="company">Company</option>
                                <option value="student">Student</option>
                            </select>
                            <span id='roleError' className='text-red-600'></span>
                        </div>

                        <button type="submit" className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-300 font-bold transition duration-300">
                            Sign-Up
                        </button>

                        <p className="mt-4 text-center text-gray-400">
                            Already have an account?&nbsp;
                            <Link to='/signIn' className="text-white underline">
                                Sign-In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
