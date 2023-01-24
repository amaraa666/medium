import { BarChart } from "./BarChart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function MainAd({myDataAd}) {
    const navigate = useNavigate()
    if(!localStorage.getItem('name')){
        navigate('/login')
    }
    const myCate = [];
    myDataAd.filter((e) => {
        if (!myCate.includes(e.category)) {
            myCate.push(e.category);
        }
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row py-3">
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">Users</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-person fs-3"></i>
                                        <h3>{myDataAd.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">News</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-newspaper fs-3"></i>
                                        <h3>{myDataAd.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">Category</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-card-checklist fs-3"></i>
                                        <h3>{myCate.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BarChart myData={myDataAd} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}