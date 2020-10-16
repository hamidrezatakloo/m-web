import Toolbar from './Toolbar'
import Classes from './Layout.module.css'
import Footer from './footer'
export default function Layout({children}){
    return (
        <>
        <Toolbar/>
        <main className={Classes.main}>
            {children}
        </main>
        <Footer/>
        </>
    )
}