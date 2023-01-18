
import { useNavigate } from "react-router-dom"

export default function AdminLog({ Modalshow, myModal }) {
    const bg = myModal ? 'flex' : 'none'
    const navigate = useNavigate()

    return (
        <>
            <div className="modal-section w-100 h-100 position-fixed top-0 justify-content-center align-items-center" style={{ display: bg }} onClick={Modalshow}>
                <div className="modalSec bg-white col-5 rounded-2 d-flex justify-content-center align-items-center p-3 " onClick={(e) => e.stopPropagation()}>
                    <div className="col-4 py-5 d-flex flex-column gap-3">
                        <div className="modal-title text-center">
                            <h3>Admin login</h3>
                        </div>
                        <div className="modal-body d-flex flex-column align-items-center gap-3">
                            <input placeholder="Name" />
                            <input type='password' placeholder="password" />
                            <button className="btn border" onClick={() => navigate('/admin')}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}