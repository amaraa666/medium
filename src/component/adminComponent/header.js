
import { Link } from "react-router-dom"


export default function HeaderAdmin() {
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
                <div className="col-1 d-flex align-items-center gap-2">
                    <i className="bi bi-list fs-4"></i>
                    <span className="text-light">Log out</span>
                </div>
            </div>
        </>
    )
}