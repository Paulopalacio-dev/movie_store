import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../../components/cardMovie/CardMovie";


export default function Movies() {

  const[movies, setMovies] = useState([])
  
  useEffect(() => {load()}, [])

  async function load(){
    try{
      const resposta = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=88401dc223b546c0d359bcf16b8f8c51&language=pt-BR")
      setMovies(resposta.data.results)
      
      console.log(resposta.data.results)
    }catch(erro){
      console.log(erro)
    }
  }

  return(
    <div className='content'>
      {movies.map(
        (movie) => <CardMovie key={movie.id} movie={movie}/> 
      )}

  </div>
  )
}