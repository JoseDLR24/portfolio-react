export default function SkillIcon({name, icon}) {
    return(
        <div className="flex flex-col">
            <img src={icon} alt={name} />
            <p>{name}</p>
        </div>
    )
}