import Button from "./Button"
import Content from "./Content"
import resources from "./ressurser"

export default function Map({resources}){
    return(
            <>
            {resources.filter((page) => (
                page.category.includes("cms"))).map(
                    (info) => (
                        <Content
                        category = {info.category}
                        name = {info.title}
                        url = {info.url}/>

                    ))}
            </>
    )
}