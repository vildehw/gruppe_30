import { Outlet } from "react-router-dom";


export default function Layout(){
    return(
        
        <div className="container">
        <header>
            
            <h1>Ressursarrrrkiv</h1>
             
        </header>  
        

       
            <Outlet/>
         
        </div>
        
    )
}