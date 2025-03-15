import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
   
    const userData = useLoaderData()
//    console.log(userData);

    return (
        <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <div className="flex flex-col items-center">
            <img 
                src={userData.avatar_url}
                alt="GitHub Profile"
                className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className=" text-2xl font-bold mb-2">{userData.name || userData.login}</h1>
            <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="font-semibold">{userData.followers}</span>
                <span>Followers</span>
            </div>
            </div>
        </div>
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Chetan210703')
    const data = await response.json()
    console.log('GitHub Data:', data) 
    return data;
}