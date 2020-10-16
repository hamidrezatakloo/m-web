import Classes from './Toolbar.module.css'
import Search from './SearchInput'
export default function Toolbar (){
    return(
        <>
        <ul className={Classes.List}>
            <li><a>Home</a></li>
            <li><a>Alboms</a></li>
            <li><a>types</a></li>
            <li><a>About</a></li>
            <Search/>
        </ul>
        </>
    )
}