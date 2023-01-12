



export default function Modal({ Modalshow , myModal }){
    const bg = myModal ? 'flex' : 'none'
    return(
        <>
        <div className="modal-section w-100 h-100 position-fixed top-0 justify-content-center align-items-center" style={{display: bg}} onClick={Modalshow}>
            <div className="modalSec bg-white col-5 rounded-2 d-flex justify-content-center align-items-center p-3 " onClick={(e)=>e.stopPropagation()}>
                <div className="col-4 py-5 d-flex flex-column gap-3">
                    <div className="modal-title text-center">
                        <h3>Sign in with email</h3>
                        <span>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</span>
                    </div>    
                    <div className="modal-body">
                        <span>Your Email</span>
                        <input />
                    </div>
                    <div className="modal-footer">
    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}