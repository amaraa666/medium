

import { Link } from "react-router-dom"


export default function AsideAd(){
    return(
        <>
            <div className="row">
                <div className="nav d-flex flex-column">
                    <div className="nav-item">
                        <Link to = '/'className="nav-link text-decoration-none text-dark fs-4">Dashboard</Link>
                    </div>
                    <div className="nav-item">
                        <Link to = '/adnews'className="nav-link text-decoration-none text-dark fs-4">News</Link>
                    </div>
                    <div className="nav-item">
                        <Link to = '/adUsers'className="nav-link text-decoration-none text-dark fs-4">Users</Link>
                    </div>
                </div>
            </div>
        </>
    )
}