import { Outlet, Link } from 'react-router-dom'
import {
  Navbar,
  SmallSidebar,
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
