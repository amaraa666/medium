


export default function MyBtn({btnText , textColor , background}){
    let style = {
        background: background,
        color: textColor,
        fontWeight: '400',
    }
    return(
        <a href="" className="btn rounded-5" style={style}>{btnText}</a>
    )
}