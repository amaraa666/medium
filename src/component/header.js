import userEvent from "@testing-library/user-event";
import { useState } from "react";
import MyBtn from "./button";



export default function Header({header , Modalshow , userSign , setUserSign}){
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
    if(userSign){
        return(
            <>
            <div className="container-fluid border-bottom border-1 d-flex justify-content-center p-3">
                <div className="row justify-content-between w-100">
                    <div className="col-5 d-flex gap-2">
                        <div className="col-1 d-flex align-items-center">
                            <img src={require('../images/miniLogo.png')} className='logoImg w-100' alt=''/> 
                        </div>
                        <div className="mySrch rounded-4 col-6 px-2 py-1 d-flex gap-2 align-items-center">
                            <i className="bi bi-search"></i>
                            <input placeholder="Search medium" className="rounded-4 border-0 p-1 bg-transparent"/>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <div className="col-2 d-flex text-aling-center justify-content-center gap-2" onClick={Modalshow}>
                            <i className="bi bi-pencil-square"></i>
                            <span className="d-flex align-items-center">Write</span>
                        </div>
                        <div className="col-2 d-flex text-aling-center justify-content-center">
                            <i className="bi bi-bell"></i>
                        </div>
                        <div className="col-1">
                            <div className="proImg">
                                <img src={require('../images/userImg.png')} className='w-100' alt="" onClick={()=>setUserSign(!userSign)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
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