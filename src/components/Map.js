import recources from "./ressurser"

export default function Map(recources){
    return(
            <>
            {resources.filter((page) => (
                page.category.includes("html"))).map(
                    (info) => <li>{info.title}</li>)}
            </>
    )
}