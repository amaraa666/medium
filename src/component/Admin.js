

import { useEffect, useState } from "react";
import HeaderAdmin from "./adminComponent/header";
import MainAd from "./adminComponent/MainAd";
import AsideAd from "./adminComponent/aSideAd";
import { Route, Routes } from "react-router-dom";
import AdUSers from "./adminComponent/AdUSers";
import AdNews from "./adminComponent/AdNews";

export default function Admin() {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        fetch('https://medium-api-psi.vercel.app/api/news')
            .then((res) => res.json())
            .then((data) => {
                setMyData(data.result)
            })
    }, [])



    return (
        <>
            <div className="container-fluid p-0">
                <HeaderAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <AsideAd/>
                        </div>
                        <div className="col-10">
                            <MainAd myData={myData} />
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<MainAd/>}/>
                <Route path="/adnews" element={<AdNews/>}/>
                <Route path="/adusers" element={<AdUSers/>}/>
            </Routes>
        </>
    )
}