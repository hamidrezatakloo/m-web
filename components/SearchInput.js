import Classes from './SearchInput.module.css'
export default function SearchInput(){
    return (
        <div className={Classes.container}>
        <input type="text" placeholder="...search" className={Classes.input}/>
        <button className={Classes.button}>GO</button>
        </div>
    )
}