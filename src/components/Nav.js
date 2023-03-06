export default function Nav({navCat, handleFilter}){
    return(
        <ul>
            {navCat.map((item, index) => (
                <li key={index}><button onClick={handleFilter}>{item}</button></li>
            ))}  

        </ul>  

    )
}