import React from 'react' 
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMovie } from '../redux/MovieSlice'
const MovieCard = ({movie}) => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
  const clickHandler = (id) =>{ 
    dispatch(setMovie(movie));
    sessionStorage.setItem('movie',JSON.stringify(movie));
    navigate(`/movie-summary/${id}`)
  }

  return (
    <div className='h-fit shadow-lg shadow-slate-300 hover:scale-105 transition-all duration-300 rounded-lg'>
     <div>
        <img src={movie?.show?.image?.original} alt="" className='w-full h-[375px]'/>
      </div>
      <div className='bg-gray-800 text-slate-400 px-3 py-2 rounded-b-lg flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h4 className='text-3xl'>{movie?.show?.name}</h4>
        {
          movie?.show?.rating?.average && <p className='text-lg'> <span className='text-blue-400 text-xl'>{movie?.show?.rating?.average}</span>/10</p>
        }
      </div>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>{movie?.show?.language}</p>
          <p>{movie?.show?.genres.join(' , ')}</p>
        </div>
        <div>
          <p>Premiered : <span className='text-blue-400'>{movie?.show?.premiered}</span></p>
        </div>
    
        <button className='w-full mt-10 rounded-md px-4 py-2 border border-red-700 hover:scale-95 hover:bg-red-700 hover:text-white transition-all duration-200' onClick={()=>clickHandler(movie?.show?.id)}>Know More</button>
    
      </div>
    </div>
  )
}

export default MovieCard