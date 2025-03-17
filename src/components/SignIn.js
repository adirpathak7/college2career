import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignIn() {

    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handelInputChange = (e) => {
        const { name, value } = e.target
        setInputData((preValue) => ({
            ...preValue,
            [name]: value
        }))
        clearError("email")
        clearError("password")
    }

    const clearError = (field) => {
        document.getElementById(field + "Error").innerHTML = ''
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        if (!email) {
            document.getElementById("emailError").innerHTML = "Please enter the Email!"
            document.getElementById("email").focus()
            return false
        } else if (!password) {
            document.getElementById("passwordError").innerHTML = "Please enter the Password!"
            document.getElementById("password").focus()
            return false
        } else {
            alert('Registration successfully')
            setInputData({
                email: '',
                password: '',
            })
            navigate('/signUp')
            return true
        }

        // 814193
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Email</label>
                            <input onChange={handelInputChange} value={inputData.email} type="text" id='email' name='email' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                            <span id='emailError' className='text-red-600'></span>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password</label>
                            <input onChange={handelInputChange} value={inputData.password} type="password" id='password' name='password' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                            <span id='passwordError' className='text-red-600'></span>
                        </div>

                        <button type="submit" className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-300 font-bold transition duration-300">
                            Sign-In
                        </button>

                        <p className="mt-4 text-center text-gray-400">
                            Don't have an account?&nbsp;
                            <Link to='/signUp' className="text-white underline">
                                Sign-Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
