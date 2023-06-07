import React, { useEffect } from 'react'
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux'; 
import { setMovies } from '../redux/MovieSlice';
const Home = () => {
    // const [moviesData,setMoviesData] = useState([]);
    const {movies} = useSelector((state)=>state.movie);
    const dispatch = useDispatch();
   
    const fetchData = async() =>{
      try{
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        // setMoviesData(data); 
        dispatch(setMovies(data));
      }catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
      fetchData();  
    },[])
  return (
    <div className='w-11/12 max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5 gap-y-10 pb-20'>
      {
        movies.map((movie,index)=>(
          <MovieCard movie={movie} key={index}/>
        ) )
      }
        
    </div>
  )
}

export default Home