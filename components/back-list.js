import Classes from './back-list.module.css'
import ListCard from './LIstCard'
export default function BackList(){
   return(
    <>
    <div className={Classes.Whole}>
       <div className={Classes.borderTitle}>
       <h2 className={Classes.Onvan}> TOP Month songs</h2>
       </div>
       <div className={Classes.BackList}>
    <ListCard/>
    <ListCard/>
    <ListCard/>
    </div>
    </div>
    
    </>
   )
}