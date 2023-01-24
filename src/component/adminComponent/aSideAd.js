

import { NavLink } from "react-router-dom"


export default function AsideAd() {
    return (
        <>
            <div className="row">
                <div className="nav d-flex flex-column">
                    <div className="nav-item">
                        <NavLink to='/admin' className="nav-link text-decoration-none text-dark fs-4">Dashboard</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/addnews' className="nav-link text-decoration-none text-dark fs-4">News</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/addusers' className="nav-link text-decoration-none text-dark fs-4">Users</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}