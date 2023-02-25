import resources from './ressurser.js'
import Buttons from './Buttons.js'
export default function Button(){ 

    let btnNames = []
    
    resources.filter((element) => {
        if (!btnNames.includes(element.category))
           return(btnNames.push(element.category))
        } 
    ) 

    console.log("knapper: " + btnNames);

    return( 
        btnNames.map((button) => <Buttons name={button}/>)
    )   
    
         
}