


export default function TrendNews({trendNews , myAct}){
    if(myAct.userSign){
        return(
            <>
            
            </>
        )
    }
    return(
        <>
        <div className="container-fluid d-flex flex-wrap justify-content-center py-5 border-bottom border-dark">
            <div className="titleSec col-8 d-flex align-items-center gap-2">
                <div className="d-flex align-items-center border border-2 rounded-5 py-1">
                    <img src={trendNews.miniLogo} alt=''/>
                </div>
                <h3 className="trendNewsHeader">{trendNews.title}</h3>
            </div>
            <div className="col-8 d-flex flex-wrap">
                {trendNews.news.map((c , index)=>{
                    return(
                        <div key={index} className="trendNewsCard d-flex col-4 p-2 gap-2">
                            <div className="col-1">
                                <h4 className="index">0{index+1}</h4>
                            </div>
                            <div className="col d-fex">
                                <div className="cardHeader d-flex align-items-center">
                                    <div className="imgPro d-flex align-items-center">
                                        <img src={c.proImg} alt=""/>
                                    </div>
                                    <h4 className="proName m-0">{c.proName}</h4>
                                </div>
                                <div className="cardBody">
                                    <h3 className="myTrendNewsTitle m-0">{c.title}</h3>
                                </div>
                                <div className="cardFooter d-flex gap-2">
                                    <span>{c.date}</span>
                                    <span>{c.readingTime} min read</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}