import resources from './ressurser.js'
import Buttons from './Buttons.js'
export default function Button({name}){
    return( 
        

        resources.map((button) => <Buttons name={button.category}/>)
        
        
            
    
    )
}