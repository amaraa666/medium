import React from 'react'
import { Outlet } from 'react-router-dom'
import AsideAd from './adminComponent/aSideAd'
import HeaderAdmin from './adminComponent/header'
export default function Adminlayout() {
    return (
        <div>
            <HeaderAdmin />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <AsideAd />
                    </div>
                    <div className="col-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
