import resources from "./ressurser"

export default function Map(resources){
    return(
            <>
            {resources.filter((page) => (
                page.category.includes("html"))).map(
                    (info) => <li>{info.title}</li>)}
            </>
    )
}