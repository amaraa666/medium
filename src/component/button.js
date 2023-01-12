


export default function MyBtn({btnText , textColor , background , radius , size}){
    let style = {
        background: background,
        color: textColor,
        fontWeight: '400',
        borderRadius: radius,
        fontSize: size
    }
    return(
        <a href="a" className="btn border" style={style}>{btnText}</a>
    )
}