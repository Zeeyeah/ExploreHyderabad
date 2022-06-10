import React from "react";
import InProgress from '../SVG/InProgressLogo.svg'
import Buddha from '../SVG/Lakes/Buddha.svg';
import Buildings1 from '../SVG/Lakes/Buildings1.svg';
import Buildings from '../SVG/Lakes/Buildings.svg';
import Bridge from '../SVG/Lakes/Bridge.svg';
import Sun from '../SVG/Lakes/Sun.svg';
import Masjid from "../SVG/Historic-Places/masjid.svg";
import MasjidMountain from "../SVG/Historic-Places/masjid-mountain.svg";
import Light from "../SVG/Park/park-light.svg";
import Bench from "../SVG/Park/park-bench.svg";
import Wheel from "../SVG/Park/park-wheel.svg";
import Mountain from "../SVG/Park/park-mountain.svg";
import {motion} from  "framer-motion";
import {useNavigate} from "react-router-dom"


export default function Menu() {
const [width, setWidth] = React.useState(0);
const [parkTransition, setParkTransition]= React.useState(false)
const [lakeTransition, setLakeTransition]= React.useState(false)
const [historicTransition, setHistoricTransition]= React.useState(false)
const carousel = React.useRef();
const navigate = useNavigate();

function cardTransition(card){
    if (card === "park"){
        setParkTransition(true)
        setTimeout(()=>{
            navigate("/Parks")
            setParkTransition(false)
        }, 500)
    } else if (card === "lakes"){
        setLakeTransition(true)
        setTimeout(()=>{
            navigate("/Lakes")
            setLakeTransition(false)
        }, 500)
    }
}

React.useEffect(()=>{
    setWidth(carousel.current.offsetWidth)
}, [width])


    return(
        <div className="menu">
            <motion.div
                drag='x'
                dragConstraints={{
                 right: 0, 
                 left: -width * 3.8
            }}
             className="wrapper">
                 <div
                 onClick={()=>{cardTransition("lakes") }} 

                 className= {lakeTransition ? "card-lakes-transition" : "card-lakes"}>
                 <img className='buddha-sun' src={Sun} alt="" />
                 <img className='buildings2' src={Buildings} alt="" />
                 <img className='buildings1' src={Buildings1} alt="" />
                 <img className='buddha-statue' src={Buddha} alt="" />
                 <img className='buddha-bridge' src={Bridge} alt="" />
                 </div>

            <div 
                onClick={()=>{cardTransition("park") }} 
                className= {parkTransition ? "card-park-transition": "card-park"}
                ref={carousel}
             >
            <div>
                <img className="park-wheel"  src={Wheel} />
                <img  className="park-mountain" src={Mountain} />
                <div className="park-ground"></div>
                <img className="park-bench"  src={Bench} />
                <img className="park-light"  src={Light} />
                </div>
            </div>
            <div className="card-historic">
                <div className="card-historic-sun"></div>
                <img src={MasjidMountain} alt="" className="card-masjid-mountain" />
                <img src={Masjid} alt="" className="card-masjid" />
                <div className="in-progress-card"> <img src={InProgress} alt=""/> <h4>In Progress...</h4></div>
            </div>
            <div className="card">
            <div className="in-progress-card"> <img src={InProgress} alt=""/> <h4>In Progress...</h4></div>
            </div>
            <div className="card">
            <div className="in-progress-card"> <img src={InProgress} alt=""/> <h4>In Progress...</h4></div>
            </div>
            </motion.div>
            <div className="ocean-wrap">
            <div class="ocean">
             <div class="wave-menu"></div>
             <div class="wave-menu"></div>
             <div class="wave-menu"></div>
          </div>

            </div>
        </div>
        

    )
}