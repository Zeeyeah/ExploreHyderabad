import React from 'react'
import {useNavigate} from "react-router-dom";
import {motion} from 'framer-motion'
import HyderabadLogo from '../images/hyderbad-logo.png'
import ExploreLogo from '../images/explore-logo.png'
import InProgress from '../SVG/InProgressLogo.svg'

function NavBar(props) {
    const [showNav, setShowNav] = React.useState(false)
    const navigate = useNavigate()
    function backToMenu(){ navigate("/") }
    function NavMenu(){

        return(

            <motion.div
            animate={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'rgba(0, 0, 0, .7)',
                borderRadius: '0%',
                transition: "0.5 all ease-in-out"
              }}
              className= 'hamburger-menu'>
          <motion.div className="in-progress"
            animate={{
              height: '100vh',
              width: '100vw',
              transition: "0.7 all ease-in-out",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              opacity: '100%'
            }}
          >
             <img src={InProgress} alt=""/> <h4>In Progress...</h4></motion.div>

            </motion.div>
        )
    }

  return (
<div className="nav-bar">
    <div className="nav-container">
{   props.hideNav === true ? null
      : <svg className='nav-back' onClick={backToMenu} xmlns="http://www.w3.org/2000/svg" fill='white'  viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g></svg>
    }
        <div className="hamburger" onClick={()=>{setShowNav(!showNav)}}>
            <div className={showNav ? "hamburger-icon-cross" : "hamburger-icon"}></div>
        </div>
           { showNav &&  <NavMenu /> }
           <img className='hyd-logo' src={HyderabadLogo} alt="" />
           <img className='exp-logo' src={ExploreLogo} alt="" />

           <ul className="nav-item-wrap">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">View Code</li>
           </ul>
    </div>
</div>
  )
}

export default NavBar