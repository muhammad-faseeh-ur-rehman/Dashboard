// import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { pageTitles } from '../config/navigation.js';
import { ChevronDown, ChevronUp, Menu, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
const Topbar = ({ showsidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isopen, setIsOpen] = useState(false);
  const pageTitle = pageTitles[location.pathname] || "Dashboard";
  return (
    <div className='sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm'>

      {/* page title */}
      <div className='flex items-center gap-4'>
        <Menu onClick={() => setShowSidebar(!showsidebar)} />
        <h1 className='text-xl font-light text-grey-900'>
          {pageTitle}
        </h1>
      </div>

      {/* profile */}
      <div className='relative '>
        <button onClick={() => setIsOpen(!isopen)} className='flex gap-4 items-center justify-center cursor-pointer transition '>
          {/* letter */}
          <div className='w-9 h-9 bg-primary/80 text-white rounded-full flex items-center justify-center'>
            Au
          </div>
          {/* text */}
          <span>Admin User</span>
          {/* icon */}
          <span className='text-grey-600'>
            {isopen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </button>
        {/* dropdown */}
        {isopen && (
          <div className='absolute right-0 top-14 w-74 overflow-hidden rounded-xl border-slate-200 bg-white p-2 shadow-xl'>
            {/* admin flex bbox */}
            <div className='flex items-center px-3 py-4  gap-2 border-b border-grey-200'>
              <div className='w-12 h-12 bg-primary/80 rounded-full flex items-center  justify-center text-white shrink-0'>
                AU</div>
              <div>
                <p className='text-sm text-text-primary font-medium'>Admin User</p>
                <p className='text-xs text-grey-500 '>admin@gmail.com</p>
              </div>
            </div>
            {/* menu-content */}
            <div className='border-b border-grey-200 space-y-2 py-2'>
              {/* profile */}
              <button
                onClick={() => { setIsOpen(false); navigate("/profile") }}
                className='w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-grey-50 cursor-pointer'>
                <User size={18} />
                <span>Profile</span>
              </button>
              {/* setting */}
              <button
                onClick={() => { setIsOpen(false); navigate("/Settings") }}
                className='w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-grey-50 cursor-pointer'>
                <Settings size={18} />
                <span>Settings</span>
              </button>
            </div>
            {/* logout */}
            <div className=' py-2'>
              <button onClick={() => { alert("Logout comming"); setIsOpen(false) }} className=' w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-rose-50 cursor-pointer'>
                <LogOut size={18} />
                <span className='text-md text-text-primary font-light'>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Topbar