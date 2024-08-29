import React from 'react'
import './Dashbord.css'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import logo from '../../assets/logo.png'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
          
            <img src={logo} alt="" />
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/Dashbord">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/products">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/inbox">
                    <BsFillGrid3X3GapFill className='icon'/> /inbox
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/coachs">
                    <BsPeopleFill className='icon'/> Coachs
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/events">
                    <BsListCheck className='icon'/> Events
                </a>
            </li>
         
            <li className='sidebar-list-item'>
                <a href="/ProductsClient">
                    <BsFillGearFill className='icon'/> VIEW SHOP
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar