// import React from 'react'
import { useEffect, useState } from 'react';
import { api } from '../services/api';
const Users = () => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadUsersData = async () => {
    setLoading(true)
    try {
      const data = await api.getUsers();
      setUserData(data);
    }
    catch (error) {
      console.error("UserData Loading failed:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadUsersData();
  }, [])

  if (loading && !userData) {
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className='p-6 bg-white rounded-xl border border-gray-200'>
        <div>
          <p>UserData data is unavailable</p>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-xs">
            <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Users</th>
            <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Email</th>
            <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Role</th>
            <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Status</th>
            <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Joined</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user)=>(
            <tr key={user.id} className="border-b border-gray-100">
              <td className="px-5 py-4 font-light text-sm text-left">{user.name}</td>
              <td className="px-5 py-4 font-light text-sm text-left">{user.email}</td>
              <td className="px-5 py-4 font-light text-sm text-left">{user.role}</td>
              <td className="px-5 py-4 font-light text-sm text-left">{user.status}</td>
              <td className="px-5 py-4 font-light text-sm text-left">{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users