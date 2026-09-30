import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useState } from 'react';


const MainLayout = () => {
  const [showsidebar, setShowSidebar] = useState(false);
  return (
    <div className='min-h-screen bg-bg'>

      {/* mobile overlay */}
      {showsidebar && (
        <div className=" fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setShowSidebar(false)}>

        </div>
      )}


      {/* sidebar */}
      <Sidebar
        showsidebar={showsidebar}
        setShowSidebar={setShowSidebar}
      />

      {/* right area */}
      <div className='md:ml-64 min-h-screen'>

        {/* topbar */}
        <Topbar
          showsidebar={showsidebar}
          setShowSidebar={setShowSidebar}
        />
        <main className='p-8'>
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default MainLayout