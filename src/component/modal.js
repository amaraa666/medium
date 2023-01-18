
import { useNavigate } from "react-router-dom";


export default function Modal({user , Modalshow , myModal , myUser , setMyUser , userSign , setUserSign , adminLogin , setAdminLogin}){
    const bg = myModal ? 'flex' : 'none'
    function myUserFunc(){
        if(myUser === user.name){
            window.alert('success')
            setUserSign(true)
            Modalshow()
          }else{
            window.alert('err')
          }
    }
    console.log(adminLogin)
    const navigate = useNavigate()
    if(userSign){
        return(
            <>
            <div className="modal-section w-100 h-100 position-fixed top-0 justify-content-center align-items-center" style={{display: bg}} onClick={Modalshow}>
                <div className="modalSec bg-white col-8 rounded-2 d-flex justify-content-center align-items-center p-3 " onClick={(e)=>e.stopPropagation()}>
                    <div className="col-10 py-5 d-flex flex-column gap-3">   
                        <div className="modal-body d-flex flex-column align-items-center gap-3">
                            <form className="d-flex flex-column gap-3 align-items-center">
                                <input placeholder="Title" className="w-100 border-0 fs-1"/>
                                <input placeholder="Text" className="w-100 border-0 fs-2"/>
                                <input placeholder="Category" className="w-100 border-0 fs-3"/>
                                <div className="col-4">
                                    <button className="btn border rounded-3 bg-success">Publish</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
    return(
        <>
        <div className="modal-section w-100 h-100 position-fixed top-0 justify-content-center align-items-center" style={{display: bg}} onClick={Modalshow}>
            <div className="modalSec bg-white col-5 rounded-2 d-flex justify-content-center align-items-center p-3 " onClick={(e)=>e.stopPropagation()}>
                <div className="col-4 py-5 d-flex flex-column gap-3">
                    <div className="modal-title text-center">
                        <h3>Sign in with email</h3>
                        <span>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</span>
                    </div>    
                    <div className="modal-body d-flex flex-column align-items-center gap-3">
                        <span>Your Email</span>
                        <input value={myUser} onChange={(e)=>setMyUser(e.target.value)}/>
                        <button onClick={myUserFunc} className="btn border">Continue</button>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <span onClick={()=>{setAdminLogin(!adminLogin); navigate('/login')}}>
                            Admin login
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}