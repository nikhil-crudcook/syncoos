import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { CgAdd,CgBoard,CgChevronDoubleLeft  } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import syncoos from '../assets/syncoos.png'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/create-check",
            name:"Create Check",
            icon:<CgAdd/>
        },
        {
          path:"/my-checks",
          name:"My Check",
          icon:<CgBoard/>
      },
    ]
    return (
        <div className="containerm">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebaro">
               <div className="top_section">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 22 21" fill="none"><path d="M4.09794 18.4465C3.57294 18.7459 2.8999 18.4945 2.71286 17.9288L0.0466999 9.85865C-0.140336 9.29362 0.2554 8.70386 0.859836 8.64595C3.32669 8.41004 5.71482 9.87137 6.50774 12.2728C7.30138 14.6742 6.23982 17.226 4.09794 18.4465Z" fill="url(#paint0_linear_3987_4271)"></path><path d="M10.5942 15.1353C8.01393 15.131 5.85471 16.901 5.32249 19.2685C5.19178 19.849 5.6424 20.3985 6.25045 20.4L14.922 20.4134C15.5293 20.4141 15.9821 19.8653 15.8535 19.2847C15.3278 16.9151 13.1744 15.1388 10.5942 15.1353Z" fill="url(#paint1_linear_3987_4271)"></path><path d="M1.32599 7.19977C3.17468 8.81436 5.98455 9.01282 8.07372 7.53314C10.1636 6.05275 10.846 3.37943 9.85453 1.15814C9.61116 0.613589 8.91574 0.42784 8.42396 0.776043L1.40109 5.75116C0.909308 6.10007 0.872478 6.80425 1.32599 7.19977Z" fill="url(#paint2_linear_3987_4271)"></path><path d="M14.7023 12.2671C15.4996 9.86713 17.8899 8.40864 20.356 8.64878C20.9604 8.7074 21.3555 9.29716 21.1677 9.86219L18.4885 17.9287C18.3008 18.4938 17.627 18.7445 17.1027 18.4443C14.9637 17.2203 13.9058 14.6664 14.7023 12.2671Z" fill="url(#paint3_linear_3987_4271)"></path><path d="M19.8292 5.76762L12.8258 0.765687C12.3355 0.415368 11.6393 0.598294 11.3938 1.14214C10.3929 3.35988 11.0652 6.0353 13.1493 7.52345C15.2327 9.0116 18.0433 8.82373 19.8985 7.21551C20.3535 6.82211 20.3202 6.11794 19.8292 5.76762Z" fill="url(#paint4_linear_3987_4271)"></path><defs><linearGradient id="paint0_linear_3987_4271" x1="2.7081" y1="8.26779" x2="4.72932" y2="18.3672" gradientUnits="userSpaceOnUse"><stop offset="0.2737" stop-color="#41F3FF"></stop><stop offset="0.3649" stop-color="#5DE8FF"></stop><stop offset="0.6679" stop-color="#C4C1FF"></stop><stop offset="0.8156" stop-color="#F4AEFF"></stop></linearGradient><linearGradient id="paint1_linear_3987_4271" x1="8.19898" y1="21.8777" x2="12.8891" y2="16.1627" gradientUnits="userSpaceOnUse"><stop offset="0.00581067" stop-color="#EFAAFA"></stop><stop offset="0.4176" stop-color="#FF52CA"></stop><stop offset="0.6849" stop-color="#FF6EA5"></stop><stop offset="1" stop-color="#FF8A82"></stop></linearGradient><linearGradient id="paint2_linear_3987_4271" x1="11.0898" y1="2.73956" x2="1.33723" y2="7.92939" gradientUnits="userSpaceOnUse"><stop offset="0.1285" stop-color="#9DFFC6"></stop><stop offset="0.5739" stop-color="#6DFFEA"></stop><stop offset="0.8883" stop-color="#43F6FF"></stop></linearGradient><linearGradient id="paint3_linear_3987_4271" x1="19.962" y1="17.7746" x2="16.9096" y2="9.33197" gradientUnits="userSpaceOnUse"><stop offset="0.1397" stop-color="#FF7387"></stop><stop offset="0.8771" stop-color="#FFBE75"></stop></linearGradient><linearGradient id="paint4_linear_3987_4271" x1="19.8502" y1="8.07616" x2="10.3309" y2="2.39151" gradientUnits="userSpaceOnUse"><stop offset="0.162" stop-color="#FFC37B"></stop><stop offset="1" stop-color="#ACFFBF"></stop></linearGradient></defs></svg>
                   {/* <img src={syncoos} style={{display: isOpen ? "block" : "none"}} className="logo"></img> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <CgChevronDoubleLeft onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;