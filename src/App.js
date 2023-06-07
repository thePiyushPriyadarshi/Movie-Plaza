import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; 
import BookShow from "./components/BookShow";
import MovieSummary from './components/MovieSummary'
function App() {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/movie-summary/:movieId" element={<MovieSummary/>}/>
        <Route path= "/book-show/:movieId" element={<BookShow/>}/>
      </Routes>
    </div>
  );
}

export default App;
