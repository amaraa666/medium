import MyBtn from "./button";

export default function News({news , userSign , mySavedItem}){
    const bg = userSign ? 'flex' : 'none';

    return(
        <>
        <div className="container-fluid">
            <div className="row flex-column gap-2">
              {news.map((c , index)=>{
                  return(
                    <div key={index} className="newsCard d-flex">
                        <div className="newsTitle col-7">
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
                            <div className="newsFooter gap-3" style={{display: bg}}>
                                <div className="col-9 d-flex gap-2">
                                    <span>{c.date}</span>
                                    <span>{c.readingTime}</span>
                                    <MyBtn {...c.btn}/>
                                </div>
                                <div className="col-3 d-flex gap-2">
                                    <i className="bi bi-bookmark" style={{color: c.saved ? 'yellow' : ''}} onClick={()=>mySavedItem(c.id)}></i>
                                    <i className="bi bi-dash-circle"></i>
                                    <i className="bi bi-three-dots"></i>
                                </div>                                
                            </div>
                            <div className="newsFooter gap-3" style={{display: bg === 'flex' ? 'none' : 'flex'}}>
                                <span>{c.date}</span>
                                <span>{c.readingTime}</span>
                                <MyBtn {...c.btn}/>
                            </div>
                        </div>
                        <div className="newsImg col-5">
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