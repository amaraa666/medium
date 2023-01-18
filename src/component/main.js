import MyBtn from "./button"



export default function MainSec({mainSection , myAct}){
    if(myAct.userSign){
        return(
            <></>
        )
    }
    return(
        <>
        <div className="mainSec container-fluid d-flex justify-content-center pt-5">
            <div className="row col-8 py-4">
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="mainTitle m-0">{mainSection.title}</h1>
                        <p className="mainTxt">{mainSection.txt}</p>
                        <MyBtn {...mainSection.btn}/>
                    </div>
                </div>
                <div className="col-6">
                    <img src={mainSection.img} className="w-100" alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}