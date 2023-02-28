import { Link, Outlet } from "react-router-dom";
import Button from "./Button";
import ContentPage from "./ContentPage";
import ContentTitle from "./ContentTitle";


export default function Layout({button, name}) {
    return(
        <div className='container'>
            <header> 
                <Link to="/">
                 <h1>Ressursarkiv</h1>
                </Link>
            </header>  
            <nav>
                <Button/>
            </nav>  
            <main> 
                <h2>
                    <ContentTitle name={button}/>
                </h2>
              <ContentPage/>
              <Outlet/>
            </main>
        </div>
    )
}