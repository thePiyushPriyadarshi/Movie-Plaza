import HTMLReactParser from 'html-react-parser'; 
import { useSelector } from 'react-redux'; 
import {useNavigate} from 'react-router-dom'
const MovieSummary = () => { 
  const navigate = useNavigate();
    const {movie} = useSelector((state)=>state.movie); 
    const clickHandler = (id) =>{   
      navigate(`/book-show/${id}`)
    }
  return (
   <div className='flex flex-col items-center w-11/12 max-w-[1260px] gap-10 mx-auto pb-20'>
   <h3 className='text-3xl font-semibold text-slate-900'>{movie.show.name}</h3>
   <img src={movie.show.image.original} className='w-[500px]' alt="" />
   <div className='flex justify-between w-[500px]'>
    <p className='text-xl'>Language : <span className='text-blue-600 font-medium'>{movie.show.language}</span> </p>
    {
      movie.show.rating.average &&
    <p className='text-xl'>Rating : <span className='text-blue-600 font-medium'>{movie.show.rating.average}</span> /10 </p>
    }
   </div>
   <div>
        <div className='lg:w-[50%] mx-auto'>
          <h6 className='text-xl font-semibold py-1'>SUMMARY</h6>  
          <div className='text-justify'>{HTMLReactParser(movie?.show?.summary)}</div> 
           <button  onClick={()=>clickHandler(movie?.show?.id)} className='w-full mt-10 rounded-md px-4 py-2 border border-red-700 hover:scale-95 hover:bg-red-700 hover:text-white transition-all duration-200'> Book Show</button>
        </div> 
   </div>
   </div>
  )
}

export default MovieSummary