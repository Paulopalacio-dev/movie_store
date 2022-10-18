import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api, {api_options} from "../../services/api";
import CardMovie from "../../components/cardMovie/CardMovie";
import './Search.css'

export default function Search(props) {

  const[movies, setMovies] = useState([]);
  const location = useLocation()
  const navigate = useNavigate()
  const urlAPI = "/search/movie" + location.search
  
  useEffect(() => {load()}, [location.search])

  async function load(){
    try{
      const resposta = await api.get(urlAPI, api_options())
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