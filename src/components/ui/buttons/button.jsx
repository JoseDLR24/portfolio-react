export default function Button({link, desc,content}){
    return(
        <>
        <a href={link} alt={desc} className="group">{content}</a>
        </>
    )
}