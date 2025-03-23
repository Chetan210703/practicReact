import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800">Please login to view profile</h2>
            </div>
        </div>
    )

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
                    <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                        <span className="text-4xl text-gray-600">{user.username[0].toUpperCase()}</span>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-600 font-semibold">Username:</p>
                        <p className="text-gray-800">{user.username}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
