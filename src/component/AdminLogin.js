
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function AdminLog() {
    const navigate = useNavigate()

    const [usernameAd , setUserNameAd]= useState('')
    const [passwordAd , setPasswordAd]= useState('')

    function onLogin(){
        fetch('https://medium-api-psi.vercel.app/api/users')
        .then(res=>res.json())
        .then((mydata)=>{
            const myarrUser = mydata.result.filter((e)=>e.firstName === usernameAd && e.password === passwordAd)
            console.log(myarrUser)
            if(myarrUser.length > 0){
                localStorage.setItem('name' , myarrUser[0].firstName)
                navigate('/admin');
            }else{
                window.alert('Бүртгэгдээгүй хаяг байна.')
            }
        })
    }
    useEffect(() => {
        if (localStorage.getItem("name")) {
          navigate("/admin");
        }
      }, []);
    return (
        <>
            <div className="modal-section d-flex w-100 h-100 position-fixed top-0 justify-content-center align-items-center">
                <div className="modalSec bg-white col-5 rounded-2 d-flex justify-content-center align-items-center p-3">
                    <div className="col-4 py-5 d-flex flex-column gap-3">
                        <div className="modal-title text-center">
                            <h3>Admin login</h3>
                        </div>
                        <div className="modal-body d-flex flex-column align-items-center gap-3">
                            <input placeholder="Name" value={usernameAd} onChange={(e)=>setUserNameAd(e.target.value)}/>
                            <input type='text' placeholder="password" value={passwordAd} onChange={(e)=>setPasswordAd(e.target.value)}/>
                            <button className="btn border" onClick={onLogin}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}