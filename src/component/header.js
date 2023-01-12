import { useState } from "react";
import MyBtn from "./button";



export default function Header({header , Modalshow}){
    const [bg , setBg] = useState('#FFC017')
    const [bgBtn , setBgbtn] = useState(header.btn.background);
    const handleScroll = ()=>{
        if(window.scrollY > 500){
            setBg('#fff')
            setBgbtn('rgb(26, 137, 23)')
        }else{
            setBgbtn(header.btn.background)
            setBg('#FFC017')
        }
    }
    window.addEventListener("scroll" , handleScroll)
    return(
        <>
       
        <div className="header container-fluid d-flex justify-content-center p-3 border-bottom border-dark"  style={{background: bg}}>
            <div className="row col-8 justify-content-between">
                <div className="logo col-2">
                   <img src={header.logo} className='w-100' alt=''/> 
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <ul className="d-flex m-0 list-unstyled gap-3">
                        {header.navBar.map((c , index)=>{
                            if(c.id === 4) {
                                return(
                                    <span key={index} className="navbar" onClick={Modalshow} id="dsa1">{c.title}</span>
                                    )
                            } else {
                                return(
                                    <li key={index} className="navbar">{c.title}</li>
                                    )
                            }
                            
                        })}
                        <div className="buttonSection d-flex align-items-center">
                            <MyBtn {...header.btn} background={bgBtn}/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}