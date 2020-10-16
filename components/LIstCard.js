import Classes from './ListCard.module.css'
export default function ListCard(){
    return(
        <>
            <div className={Classes.ListCard}>
                <img src="./images/JoselynFlores.jpg"/>
                <hr/>
                <h2 className={Classes.name}>JoselynFlores</h2>
                <p className={Classes.artist}>xxxtentacion</p>
            </div>
        </>
    )
}