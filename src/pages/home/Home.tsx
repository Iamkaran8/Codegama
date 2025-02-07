import { Banner } from "../../components/Banner/Banner"
import { Brands } from "../../components/Brands/Brands"
import { Faq } from "../../components/Faq/Faq"
import { Features } from "../../components/Features/Features"
import { Focus } from "../../components/Focus/Focus"
import { Footer } from "../../components/Footer/Footer"
import { Track } from "../../components/KeepTrack/Track"
import { KeyPoints } from "../../components/keyPoints/KeyPoints"
import { ProductHunt } from "../../components/ProductHunt/ProductsHunt"
import { Reviews } from "../../components/Reviews/Reviews"
import { Table } from "../../components/TableContents/Table"
import { TrackMatters } from "../../components/TrackMatters/TrackMatters"
import { Updates } from "../../components/Updates/Updates"
import '../../Styles/Styles.scss'

export const Home = ()=>{
    return(
        <>
        <Banner/>
        <Brands/>
        <Track/>
        <KeyPoints/>
        <Features/>
        <TrackMatters/>
        <Focus/>
        <Brands/>
        <Reviews/>
        <Table/>
        <ProductHunt/>
        <Updates/>
        
        <Faq/>
        <Footer/>
        </>
    )
}