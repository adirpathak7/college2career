import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {

    const [inputData, setInputData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    })

    const handelInputChange = (e) => {
        const { name, value } = e.target
        console.log(value);
        setInputData((preValue) => ({
            ...preValue,
            [name]: value
        }))
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        alert(1)
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">

                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Username</label>
                            <input value={inputData.username} onChange={handelInputChange} type="text" id='username' name='username' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Email</label>
                            <input value={inputData.email} onChange={handelInputChange} type="email" id='email' name='email' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Password</label>
                            <input value={inputData.password} onChange={handelInputChange} type="password" id='password' name='password' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Confirm Password</label>
                            <input value={inputData.confirmPassword} onChange={handelInputChange} type="password" id='confirmPassword' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Join As</label>
                            <select value={inputData.role} onChange={handelInputChange} className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" name="role" id="role">
                                <option value="company">Company</option>
                                <option value="student">Student</option>
                            </select>
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
