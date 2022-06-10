import React from 'react';
import NavBar from './NavBar';
import Buddha from '../SVG/Lakes/Buddha.svg';
import BuddhaArt from '../SVG/Lakes/buddha-illustration.svg';
import Buildings1 from '../SVG/Lakes/Buildings1.svg';
import Buildings from '../SVG/Lakes/Buildings.svg';
import Bridge from '../SVG/Lakes/Bridge.svg';
import Sun from '../SVG/Lakes/Sun.svg';
import ParkLocation from '../images/location-icon.png'
import Ameerpur from '../images/ameenpur.jpg';
import DurgamCheruvu from '../images/durgam.jpg';
import Gandipet from '../images/gandipet.jpeg'
import HimayatSagar from '../images/himayatsagar.jpg'
import HussainSagar from '../images/hussainsagar.avif'
import Khajaguda from '../images/khajaguda.jpg'
import LotusPond from '../images/lotuspond.jpg'
import Shamirpet from '../images/shamirpet.jpg'
import SaroorNagar from '../images/saroornagar.jpg'
import Sanjeeva from '../images/SanjeevaPark.jpg'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
let lakesImages = [
  {
    "name": "Durgam Cheruvu",
      'img': DurgamCheruvu,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      "isExpanded": false
    },
    {
        name: "Shamirpet Lake",
        img: Shamirpet,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
    {
        name: "Hussain Sagar Lake",
        img: HussainSagar,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
    {
      'name': "Ameerpur Lake",
      'img': Ameerpur,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      'isExpanded': false
    },
    {
        name: "Khajaguda Lake",
        img: Khajaguda,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
    {
        name: "Lotus Pond Lake",
        img: LotusPond,
        'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
        isExpanded: false
    },
  {
     name: "Gandipet Lake",
      img: Gandipet,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      isExpanded: false
    },
  {
      name: "Saroor Nagar Lake",
      img: SaroorNagar,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      isExpanded: false
  },
  {
      name: "Himayat Sagar",
      img: HimayatSagar,
      'info': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia consequuntur officia magni quaerat esse necessitatibus veniam, provident expedita quisquam repudiandae sunt reprehenderit, ad reiciendis nostrum deleniti architecto tempore at." ,
      isExpanded: false
  }
]

export default function  Lakemenu () {
  const [parkCards, setParkCards] = React.useState(lakesImages);
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
    className={kard.isExpanded ? "lakes-expanded" : "lakes"}>
       <div className={kard.isExpanded ?"lake-overlay-expand" :'lake-overlay'}> </div>
       <h3 className= {kard.isExpanded ?"lake-title-expand" : "lake-title"}>{kard.name}</h3>
       <div className={kard.isExpanded ?"lake-info-expand" :'lake-info'}>
         <p>{kard.info}</p>
         <div className="lake-maps"><h4>Maps</h4> <img src={ParkLocation} alt="" /> </div>
         <div className="lake-web"></div>
       </div>
      
      <img src= {kard.img} alt=""  />
    </div>
  )
})

  return (
    <div>
      <NavBar />
    <div className="lake">
    <div className='lakes-menu'> 
    <div className='lake-headline' id='lake-headline'>
              <div className="lake-headline-info">
                <h1> Lakes </h1>
                 <br />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, delectus voluptas repellat optio libero unde architecto quaerat! Reprehenderit, nostrum deserunt dolorem voluptatem magni fuga soluta explicabo exercitationem asperiores. Tempora, dignissimos.
                  </p>
              </div>
              <a href="#lakes">
              <div  className="lake-headline-button">Explore <svg xmlns="http://www.w3.org/2000/svg" fill='white'  viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g></svg></div>
              </a>
            </div>
      <img className='buddha-art' src={BuddhaArt} alt="" />
      <img className='buddha-sun' src={Sun} alt="" />
      <img className='buildings2' src={Buildings} alt="" />
      <img className='buildings1' src={Buildings1} alt="" />
      <img className='buddha-statue' src={Buddha} alt="" />
      <img className='buddha-bridge' src={Bridge} alt="" />
    </div>
    <div className="lake-cards-menu">
      <div className="lake-cards">
            
            <a href="#lake-headline">
              <div className="lake-to-top"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g></svg></div>
            </a>
          <div className="lake-wrapper" id='lakes'>
        <motion.div drag= 'x' dragConstraints= {{right: 0, left: -width * 8}} className="park-corousel">
           {displayParks}
        </motion.div>
          <div class="ocean">
             <div class="wave"></div>
             <div class="wave"></div>
             <div class="wave"></div>
          </div>
          </div>
      
      </div>
    </div>
    </div>
    </div>
  )
}

