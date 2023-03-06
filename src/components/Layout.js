

export default function Layout({children}){
    return(
        
        <div className="container">
        <header>
            <h1>ressursarkiiv</h1> 
            <nav> 
            
            </nav>
        </header> 
        <main>
            {children}
        </main> 
        </div>
        
    )
}