import { useEffect, useState } from "react"
import resources from "./ressurser"
import ContentLinks from "./ContentLinks"
import Nav from "./Nav"

export default function Main(){  
    const [filter, setFilter] = useState("Ressurser") 
    const [resultat, setResultat] = useState([])
    const navCat = [...new Set(resources.map((e) => e.category))]

    const getCategory = () =>{
        setResultat(resources.filter(items => items.category === filter)) 
        
    }   

    useEffect(() => {
        getCategory()
    },[filter]) 

    const handleFilter = (event) =>{
        console.log(event.target.innerHTML) 
        setFilter(event.target.innerHTML)
    }  
    

    return( 
        <>
            <h2>{filter}</h2>   
            <Nav navCat={navCat} handleFilter={handleFilter}/>
            {resultat?.map((item, index) =>(
                <ContentLinks key={index} title={item.category} urlName={item.title} url={item.url}/>
            ))}
        </>
    )
} 
//kode hentet fra forelesning