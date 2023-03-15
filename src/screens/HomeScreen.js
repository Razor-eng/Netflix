import React from 'react'
import Banner from '../components/Banner';
import './HomeScreen.css'
import Nav from '../components/Nav';
import Row from '../components/Row';
import requests from '../backend/Request';


function Homescreen() {
    return(
    <div className="homeScreen">
        <Nav/>
        <Banner/>
        <Row 
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title='Trending Now' fetchURL={requests.fetchTrending}/>
        <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchURL={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
        {/* <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/> */}
    </div>
    );
}

export default Homescreen
