import resources from './ressurser.js'
import { NavLink } from 'react-router-dom'
export default function Button(){ 


    const navLinkStyles = ({isActive}) => {
        return{
            color: isActive ? 'blue' : 'pink', 
            
        }
    }


    let btnNames = []
    resources.filter((element) => {
        if (!btnNames.includes(element.category))
           return(btnNames.push(element.category))
        }
    ) 
    
    console.log("knapper: "+btnNames);

    return(  
         
        
        btnNames.map((button) => <button><NavLink style={navLinkStyles} to={button}>{button}</NavLink></button>) 

        
        
    )  
         
}