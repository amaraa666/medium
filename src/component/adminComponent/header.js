
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function HeaderAdmin() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid d-flex p-2 bg-secondary justify-content-between">
                <div className="col-8 d-flex">
                    <div className="col-4">
                        <h4><Link to='#' className="text-decoration-none text-dark">Company name</Link></h4>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <input placeholder="Search" className="w-100 rounded-2 border-0 bg-transparent text-dark" />
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center gap-2">
                    <div className="col-8 row gap-1 alihn-items-center">
                        <span className="text-light fs-5 col d-flex align-items-center">{localStorage.getItem('name')}</span>
                        <i className="bi bi-list fs-4 col"></i>
                    </div>
                    <span className="text-light" onClick={()=>{ localStorage.clear(); navigate("/login")}}>Log out</span>
                </div>
            </div>
        </>
    )
}