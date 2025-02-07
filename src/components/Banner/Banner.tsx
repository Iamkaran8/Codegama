import '../Banner/Banner.scss'
import { Header } from '../Header/Header'
import { Hero } from '../HomeHero/Hero'

export const Banner = ()=>{
    return(

        <>
        <div className='banner'>
            <Header/>
            <Hero/>
        </div>
        </>
    )
}