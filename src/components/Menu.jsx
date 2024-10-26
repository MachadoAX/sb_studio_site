import React from 'react'
import { Link } from 'react-router-dom'
import logo_sb_1 from '../assets/img/sb_logo_1.png'
import { Navbar } from 'flowbite-react'

const Menu = () => {
  return (
    <Navbar className=' bg-black/90'>
    <Navbar.Brand as={Link} href={'/'}>
      <img src={logo_sb_1} className="mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link className='text-slate-500' href="#" >
        <Link to={'/'} className='hover:text-slate-400 active:text-slate-200'>Home</Link>
      </Navbar.Link>
      <Navbar.Link className='text-slate-500' as={Link} href="#">
        About
      </Navbar.Link>
      <Navbar.Link className='text-slate-500'><Link to={"/galeria"}>Fotos</Link></Navbar.Link>
      <Navbar.Link className='text-slate-500' href="#">Pricing</Navbar.Link>
      <Navbar.Link className='text-slate-500' href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Menu