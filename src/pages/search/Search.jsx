import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CardMovie from "../../components/cardMovie/CardMovie";
import './Search.css'

export default function Search(props) {

  const[movies, setMovies] = useState([]);
  const location = useLocation()
  const navigate = useNavigate()
  const urlAPI = "https://api.themoviedb.org/3/search/movie" +
                  location.search +
                  "&api_key=88401dc223b546c0d359bcf16b8f8c51&language=pt-BR"
  
  useEffect(() => {load()}, [location.search])

  async function load(){
    try{
      const resposta = await axios.get(urlAPI)
      setMovies(resposta.data.results)
      
      console.log(location)
      
    }catch(erro){
      console.log(erro)
    }
  }

  return(
    <div>
      <section className="hero">
      <button className="btn-back" onClick={() => navigate(-1)}>
          <span className="material-icons">navigate_before</span>
          voltar
        </button>
      </section>
    <div className='content'>
    
      {movies.map(
        (movie) => <CardMovie key={movie.id} movie={movie}/> 
      )}
    </div>
    </div>
  )
}