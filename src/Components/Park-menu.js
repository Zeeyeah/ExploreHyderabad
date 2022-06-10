import React from 'react'
import NavBar from './NavBar';
import Light from "../SVG/Park/park-light.svg";
import Bench from "../SVG/Park/park-bench.svg";
import Wheel from "../SVG/Park/park-wheel.svg";
import Mountain from "../SVG/Park/park-mountain.svg";
import {motion} from  "framer-motion";
import WonderLa from '../images/Wonderla.jpg'
import Jalvihar from '../images/Jalvihar.jpg'
import OceanPark from '../images/OceanPark.jpeg'
import LuminiPark from '../images/LuminiPark.jpg'
import ParkLocation from '../images/location-icon.png'
import NTR from '../images/NTR.jpg'
import SnowWorld from '../images/SnowWorld.jpg'
import WildWaters from '../images/WildWaters.jpg'
import Escape from '../images/EscapePark.jpg'
import MountOpera from '../images/MountOpera.jpg'
import Sanjeeva from '../images/SanjeevaPark.jpg'
import {useNavigate} from "react-router-dom"




let parksImages = [
  {
    'name': "WonderLa",
    'img': WonderLa,
    'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
    'isExpanded': false
  },
  {
      "name": "Jalvihar Park",
      'img': Jalvihar,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      "isExpanded": false
    },
    {
        name: "Wild Waters",
        img: WildWaters,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
    {
        name: "Sanjeeva Park",
        img: Sanjeeva,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
    {
        name: "Snow World",
        img: SnowWorld,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
    {
        name: "Escape Park",
        img: Escape,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
  {
     'name': "Ocean Park",
      "img": OceanPark,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      "isExpanded": false
    },
  {
      "name": "NTR Garden",
      "img": NTR,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      "isExpanded": false
  },
  {
      name: "Mount Opera",
      img: MountOpera,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      isExpanded: false
  },
  {
      name: "Lumini Park",
      img: LuminiPark,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      isExpanded: false
  }
]









function Parkmenu() {
const [parkCards, setParkCards] = React.useState(parksImages)
const [width, setWidth] = React.useState(0);
const carousel = React.useRef();

const navigate = useNavigate()
function expaandParks(kard){
  setParkCards(allCards=> allCards.map(card=>{
   return kard == card.name ? {...card, isExpanded: !card.isExpanded} : card
  }))
}
    
React.useEffect(()=>{
  setWidth(carousel.current.offsetWidth)
}, [width])

let displayParks = parkCards.map(kard =>{
  return (
    <div
    onClick={()=>{
      expaandParks(kard.name)
    }}
    ref= {carousel}
    className={kard.isExpanded ? "parks-expanded" : "parks"}>
       <div className={kard.isExpanded ?"park-overlay-expand" :'park-overlay'}> </div>
       <h2 className= {kard.isExpanded ?"park-title-expand" : "park-title"}>{kard.name}</h2>
       <div className={kard.isExpanded ?"park-info-expand" :'park-info'}>
         <p>{kard.info}</p>
         <div className="park-maps"><h4>Maps</h4> <img src={ParkLocation} alt="" /> </div>
         <div className="park-web"></div>
       </div>
      <img src= {kard.img} alt=""  />
    </div>
  )
})

 
  return (
    <div className='park-menu'>
      <NavBar />
          <div className=  "card-park-open">
            <div className='park-headline' id='park-headline' href="#park">
              <div className="park-headline-info">
                <h1>Amusment Parks & <br /> Water Games </h1>
                 <br />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, delectus voluptas repellat optio libero unde architecto quaerat! Reprehenderit, nostrum deserunt dolorem voluptatem magni fuga soluta explicabo exercitationem asperiores. Tempora, dignissimos.
                  </p>
              </div>
              <a href="#park">
              <div  className="park-headline-button">Explore <svg xmlns="http://www.w3.org/2000/svg" fill='white'  viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g></svg></div>
              </a>
            </div>
            <div className="park-ground"></div>
            <img className="park-wheel"  src={Wheel} />
            <img  className="park-mountain" src={Mountain} />
            <img className="park-bench"  src={Bench} />
            <img className="park-light"  src={Light} />
          </div>
        <div className="parks-cards">
            <a href="#park-headline">
              <div className="park-to-top"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g></svg></div>
            </a>
          <div className="park-wrapper">
        <motion.div id='park' drag= 'x' dragConstraints= {{right: 0, left: -width * 8}} className="park-corousel">
           {displayParks}
        </motion.div>
        <div class="ocean">
             <div class="wave-park"></div>
             <div class="wave-park"></div>
             <div class="wave-park"></div>
          </div>
          </div>
      </div>
    </div>
    
  )
}

export default Parkmenu