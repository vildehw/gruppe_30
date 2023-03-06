import { NavLink, useParams } from "react-router-dom";

export default function Nav({navCat, handleFilter}){ 

    
    return(
        <ul>
            {navCat.map((item, index) => (
                <NavLink key={index} to={item}><button >{item}</button></NavLink>
            ))}  

        </ul>  

    )
}