import Layout from './../components/Layout'
import Board from './../components/board'
import Banner from './../components/banner'
import BackList from './../components/back-list'
export default function HomePage(){
    return (
        <>
        <Layout>
        <Banner/>
        <Board/>
        <BackList/>
        <BackList/>
        <BackList/>
        </Layout>
        
        </>
    )
}