import { useParams } from "react-router-dom"
import resources from "./ressurser"

export default function ContentPage({url, name}) { 

    const {slug} = useParams() 
    //const resources = resources.find((res) => res?.category === slug)  

    //{console.log(recipe)}

    return( 
        <>
        
        
        <li><a href={url}>{name}</a></li> 
        </>
    )
}