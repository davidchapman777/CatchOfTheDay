import { Outlet } from 'react-router-dom'
import {
  Navbar,
  BigSidebar
} from '../../components'

const SharedLayout = () => {
  return (
    <div>
      <Navbar/>
      <BigSidebar />
      <Outlet/>
    </div>
  )
}

export default SharedLayout
