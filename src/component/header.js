import MyBtn from "./button"


export default function Header({header}){
    return(
        <>
        <div className="header container-fluid d-flex justify-content-center p-3 border-bottom border-dark">
            <div className="row col-11 justify-content-between">
                <div className="logo col-2">
                   <img src={header.logo} className='w-100' alt=''/> 
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <ul className="d-flex m-0 list-unstyled gap-3">
                        {header.navBar.map((c)=>{
                            return <li className="navbar">{c}</li>
                        })}
                        <div className="buttonSection d-flex align-items-center">
                            <MyBtn {...header.btn}/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}