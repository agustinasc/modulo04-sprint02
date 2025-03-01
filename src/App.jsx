import WatchlistModal from './components/WatchlistModal'
import MovieList from './components/MovieList'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {

  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false)
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    try {
      const storedWatchlist = localStorage.getItem("watchlist");
      if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
      }
    } catch (error) {
      console.error("Error al cargar la watchlist:", error);
      setWatchlist([]); // Si hay un error, asignar un array vacío
    }
  }, []);

  // Guardar watchlist en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    } catch (error) {
      console.error("Error al guardar la watchlist:", error);
    }
  }, [watchlist]);



  return (
    <>      
      <Header onOpenWatchlist={() => setIsWatchlistOpen(true)} />
      
      <MovieList 
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      /> 
      {isWatchlistOpen && 
        <WatchlistModal 
          onClose={() => setIsWatchlistOpen(false)} 
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />}  
      <Footer/>
    </>
  )
}

export default App
