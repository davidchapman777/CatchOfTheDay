import { MdPostAdd } from 'react-icons/md'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { BsPersonSquare } from 'react-icons/bs'
import { BiStats } from 'react-icons/bi'

const links = [
    {
        id: 1,
        text: 'Profile',
        path: '/',
        icon:<BsPersonSquare/>
    },
    {
        id: 2,
        text: 'Add Post',
        path: '/add-post',
        icon:<MdPostAdd/>
    },
    {
        id: 3,
        text: 'All Posts',
        path: '/all-posts',
        icon:<BsFillFileEarmarkPostFill/>
    },
    {
        id: 4,
        text: 'Stats',
        path: '/stats',
        icon:<BiStats/>
    },
]
export default links