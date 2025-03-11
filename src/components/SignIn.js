import React from 'react'
import { Link } from 'react-router-dom'


export default function SignIn() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input type="email" id='email' name='email' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <input type="password" id='password' name='password' className="w-full p-2 border border-gray-700 bg-gray-800 rounded focus:outline-none focus:border-white" />
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
                </div>
            </div>
        </>
    )
}
