import React, { useEffect, useState } from "react";
import api, {api_options} from "../../services/api";
import CardMovie from "../../components/cardMovie/CardMovie";


export default function Movies() {

  const[movies, setMovies] = useState([])
  
  async function load(){
    try{
      const resposta = await api.get("/movie/top_rated?", api_options())
      setMovies(resposta.data.results)
      
    }catch(erro){
      console.log(erro)
    }
    
  }
  useEffect(() => {load()}, [])


  return(
    <div className='content'>
      {movies.map(
        (movie) => <CardMovie key={movie.id} movie={movie}/> 
      )}

  </div>
  )
}