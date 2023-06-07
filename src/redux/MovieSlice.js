import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        movies:[{}],
        movie:sessionStorage.getItem('movie') ? JSON.parse(sessionStorage.getItem('movie')) : {},
        BookShowData:localStorage.getItem("BookShowData") ? JSON.parse(localStorage.getItem('BookShowData')) : {
            firstName:'',
            lastName:'',
            movieName:'',
            showtime:'',
            email:''
        }
    },
    reducers:{
        setMovies(state,value){
            state.movies = value.payload
        },
        setMovie(state,value){
            state.movie=value.payload
        },
        setBookShowData(state,value){
            state.BookShowData = value.payload
          }
    }
})

export const {setMovies,setMovie,setBookShowData} = MovieSlice.actions;
export default MovieSlice.reducer;