import React, { useState,useEffect } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY,IMAGE_URL } from '../../Constatnts/constants'

function Banner() {
    const [bannerMovie,setbannerMovie]=useState()
    useEffect(()=>{
        const movieNumber = Math.floor(Math.random() * 20);
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            setbannerMovie(response.data.results[movieNumber])
        })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${bannerMovie ? IMAGE_URL+bannerMovie.backdrop_path :''})`}}>
        <div className='content' >
                <h1 className='title'>{ bannerMovie ? bannerMovie.title:''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{ bannerMovie ? bannerMovie.overview : ''}</h1>
            </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner