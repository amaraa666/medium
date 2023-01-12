import MyBtn from "./button"





export default function News({news}){
    return(
        <>
        <div className="container-fluid">
            <div className="row flex-column gap-2">
              {news.map((c , index)=>{
                return(
                    <div key={index} className="newsCard d-flex">
                        <div className="newsTitle col-6">
                            <div className="pro d-flex">
                                <div className="imgPro">
                                    <img src={c.proImg} alt=''/>
                                </div>
                                <span>{c.proName}</span>
                            </div>
                            <div className="newsBody">
                                <h3>{c.title}</h3>
                                <p>{c.text}</p>
                            </div>
                            <div className="newsFooter d-flex gap-3">
                                <span>{c.date}</span>
                                <span>{c.readingTime}</span>
                                <MyBtn {...c.btn}/>
                            </div>
                        </div>
                        <div className="newsImg col">
                            <img src={c.newsImg} alt=''/>
                        </div>
                    </div>
                )
              })}  
            </div>
        </div>
        </>
    )
}