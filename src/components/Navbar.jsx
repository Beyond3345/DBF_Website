import logo from '../assets/DBFlogo.png'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div className="navbar h-12 bg-white fixed z-50">
    <div className='container md:mx-auto'>
        <div className="navbar-start">
            <div className='flex flex-row'>
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-100 rounded-box w-52">
                        {/*<li tabIndex={0}>
                            <a className="justify-between">
                                About
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-sky-50">
                                <Link to='purposeandhistory'><li><a>About Us</a></li></Link>
                                <Link to='leadershipandstructure'><li><a>Team</a></li></Link>
                            </ul>
  </li>*/}
                        <Link to='about'><li><a>About</a></li></Link>
                        <Link to='team'><li><a>Team</a></li></Link>
                        <Link to='projects'><li><a>Projects</a></li></Link>
                        <Link to='sponsorus'><li><a>Sponsor Us</a></li></Link>
                        <Link to='join'><li><a>Join</a></li></Link>
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt={'UNSW Design Build Fly'} className='h-12 object-contain' />
                </Link>
            </div>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
                {/*<li tabIndex={0}>
                    <a>
                        <Link to='purposeandhistory'>About</Link>
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 bg-sky-100">
                        <Link to='purposeandhistory'><li><a>About Us</a></li></Link>
                        <Link to='leadershipandstructure'><li><a>Team</a></li></Link>
                    </ul>
  </li>*/}
                <Link to='about'><li><a>About</a></li></Link>
                <Link to='team'><li><a>Team</a></li></Link>
                <Link to='projects'><li><a>Projects</a></li></Link>
                <Link to='sponsorus'><li><a>Sponsor Us</a></li></Link>
                <Link to='join'><li><a>Join</a></li></Link>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Navbar