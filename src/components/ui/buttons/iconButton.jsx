export default function IconButton({icon, link, desc}){
    return(
        <>
        <a href={link} alt={desc}>{icon}</a>
        </>
    )
}