import { useEffect, useState } from "react"
import resources from "./ressurser"
import ContentLinks from "./ContentLinks"
import Nav from "./Nav"
import { useParams } from "react-router-dom"

export default function Main(){  
    const [filter, setFilter] = useState("Ressurser") 
    const [resultat, setResultat] = useState([])
    const navCat = [...new Set(resources.map((e) => e.category))]  
    //const { slug } = useParams();
   

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
            
            <Nav navCat={navCat} handleFilter={handleFilter}/>  
            <main>
            <h2>{filter}</h2> 
            {resultat?.map((item, index) =>(
                <ContentLinks key={index} title={item.category} urlName={item.title} url={item.url}/>
            ))} 
            </main>
        </>
    )
} 
//kode hentet fra forelesning