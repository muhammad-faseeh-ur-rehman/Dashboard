import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Profile from './pages/Profile';



const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App