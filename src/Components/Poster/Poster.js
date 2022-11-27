import React, { useEffect,useState } from "react";
import "./Poster.css"
import axios from '../../axios'
import { API_KEY,IMAGE_URL } from "../../Constatnts/constants";
import YouTube from 'react-youtube';

function Poster(props){
    const [movieList,setMovieList]=useState([])
    const [movieId,setMovieId]=useState('')
    useEffect(()=>{
        axios.get(`${props.url}`).then((response)=>{
            setMovieList(response.data.results)
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    const youtube=(id)=>{
        // axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        //     if(response.data.results.length !== 0){
        //         console.log(response.data.results)
        //     setMovieId(response.data.results[0].key)
        //     }
            
        // })
    }
    return(
        <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movieList.map((obj,index)=>{
            return(
            <img className={ props.isSmall ?'smallPoster' : 'poster'} alt='poster' src={`${IMAGE_URL+obj.backdrop_path}`} onClick={()=>youtube(obj.id)}/>
        )})}
        </div>
        { movieId && <YouTube opts={opts} videoId={movieId.id}/>}
    </div> )
}

export default Poster