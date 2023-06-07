import React, { useState ,useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { setBookShowData } from '../redux/MovieSlice'; 
import { toast } from 'react-toast';
const BookShow = () => {
    const {BookShowData,movie} = useSelector((state)=>state.movie);
    const [formData,setFormData] = useState(BookShowData);
   
    useEffect(()=>{
  setFormData((prevFormData) => {
      return {
        ...prevFormData,
        movieName : movie.show.name,
      };
    });
    },[movie])
    const dispatch = useDispatch(); 
  function changeHandler(event) {
    const { name, value} = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
    function submitHandler(event){
      event.preventDefault();
      localStorage.setItem('BookShowData',JSON.stringify(formData))

      dispatch(setBookShowData(formData));
      toast.success("Show Booked Successfully");
    }
  return (
    <div className="mx-auto w-11/12 max-w-[600px]">
    <div className="container mx-auto py-8">
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <h2 className="text-2xl  text-center text-slate-800 font-bold mb-5">Book Show</h2>
        <form onSubmit={submitHandler}>
        <div className="mb-4">
            <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">Movie Name</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" name="movieName" type="text" value={formData.movieName} onChange={changeHandler}/>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="block text-gray-700 text-sm font-bold" htmlFor="firstName">First Name</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" name="firstName" type="text" placeholder="Enter your First name" value={formData.firstName} onChange={changeHandler}/>
        
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id='lastName' name="lastName" type="text" placeholder="Enter your Last name" value={formData.lastName} onChange={changeHandler}/>
            </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id='email' name="email" type="email" placeholder="Enter your Email" value={formData.email} onChange={changeHandler}/>
            </div>
         <div className='mb-4 flex flex-col'>
         <label htmlFor='showtime'>Show Time</label>
         <select name="showtime" id="" className='lg:w-[50%] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500' value={formData.showtime} onChange={changeHandler}>
          <option value="">-select-</option>
          <option value="9:00am-12:00pm">9:00am-12:00pm</option>
          <option value="12:00pm-3:00pm">12:00pm-3:00pm</option>
          <option value="3:00pm-6:00pm">3:00am-6:00pm</option>
          <option value="6:00pm-9:00pm">6:00am-9:00pm</option> 
         </select>

         </div>
          <div className="flex justify-center">
            <button type='submit' className='w-full mt-10 rounded-md px-4 py-2 border border-red-700 hover:scale-95 hover:bg-red-700 hover:text-white transition-all duration-200'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    </div>
  )
}

export default BookShow