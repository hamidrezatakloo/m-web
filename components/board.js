import Classes from './board.module.css'
import Card from './card'
export default function Board (){
    return (
        <div className={Classes.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}