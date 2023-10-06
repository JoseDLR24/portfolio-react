export default function TechCard({technology}){
    return(
        <div className="border border-teal-200 shadow-md bg-teal-100 rounded-lg p-2 mb-2">
            <p className="font-medium w-fit">{technology}</p>
        </div>
    )
}