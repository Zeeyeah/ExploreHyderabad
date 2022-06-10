import react from "react";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Menu from './Menu';
import NavBar from './NavBar';
import Charminarsvg from '../SVG/Charminar/Charminar.svg';
import Clouds from '../SVG/Charminar/Clouds-back.svg';
import Stars from '../SVG/Charminar/Stars.svg';
 function Weather(){
  
  
  return(
   
   <div className='weather'>
     
     <h1 className='temp'>Exploring Hyderabad</h1>
     <h3> A Travel Guide </h3>
   </div>
   
)
}
 function Star(){
    return(
        <div>

        <img alt='stars' src={Stars} className= 'stars' ></img>
        <img alt='stars' src={Stars} className= 'stars-one' ></img>
        <img alt='stars' src={Stars} className= 'stars-two' ></img>
        </div>
    )

}

function Moon(){

  return(
      <div className='circle-one'>
      <div className='circle-two'>
      </div>
      <div className='circle-three'></div>
      </div>
  )
}

 function Ground(){

  return(
      <div>
        
      <div className='ground-box'></div>
      </div>

  )
}
function  Cloud(){
    
    return(

        <img alt='clouds' src={Clouds} className= 'cloud'></img>
    )


}

function Charminar(){

    return(
        <img alt='charminar' src={Charminarsvg} className= 'charminar'></img>

    )
}
export default function Homepage(){


    return(
      <div className="App">
        <ParallaxProvider>
          
        <ParallaxBanner 
        className="home-page"
    layers={[
      
      {
        children: <Star/>,
        speed: -30,
      },
      {
        children: <Moon/>,
        speed: -25,
      },
      {
        children: <Cloud/>,
        speed: -20,
      },
      {
        children: <Charminar/>,
        speed: -15,
      },
      {
        children: <Ground/>,
        speed: 0,
        expanded: false,
      },
    ]}
    style ={{
      
    }}
  />
  <NavBar 
  hideNav = {true} />
  <Weather />
  <Menu />
  </ParallaxProvider>
        </div>
    )
}