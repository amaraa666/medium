

import { useEffect, useState } from "react";
import HeaderAdmin from "./adminComponent/header";
import MainAd from "./adminComponent/MainAd";

export default function Admin() {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.50:4040/news')
            .then((res) => res.json())
            .then((data) => {
                setMyData(data.news)
            })
    }, [])



    return (
        <>
            <div className="container-fluid p-0">
                <HeaderAdmin />
                <MainAd myData={myData} />
            </div>
        </>
    )
}