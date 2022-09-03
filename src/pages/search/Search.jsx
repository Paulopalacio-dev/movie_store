import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../../components/cardMovie/CardMovie";


export default function Search(props) {

  const[movies, setMovies] = useState([]);
  const urlAPI = "https://api.themoviedb.org/3/search/movie?" +
                  "query=100" +
                  "&api_key=88401dc223b546c0d359bcf16b8f8c51&language=pt-BR"
  
  useEffect(() => {load()}, [])

  async function load(){
    try{
      const resposta = await axios.get(urlAPI)
      setMovies(resposta.data.results)
      
      console.log(props.location)
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