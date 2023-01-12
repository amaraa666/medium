import MyBtn from "./button"



export default function Aside({aside}){
    return(
        <>
        <div className="aside container-fluid">
            <div className="aside-title">
                <h5>{aside.title}</h5>
            </div>
            <div className="newsType  d-flex flex-wrap gap-3 border-bottom border-1 py-3">
                {aside.newsType.map((c , index)=>{
                    return  <MyBtn key={index} btnText={c} background={aside.background} textColor={aside.textColor} size={aside.size}/>
                })}
            </div>
            <div className="menu d-flex gap-4 flex-wrap py-2">
                {aside.menu.map((c , index)=>{
                    return(
                        <span key={index}className="menuList">{c}</span>
                    )
                })}
            </div>
        </div>
        </>
    )
}