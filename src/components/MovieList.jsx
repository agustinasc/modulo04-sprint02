import MovieCard from './MovieCard'
import criminalesAlaVista from '../assets/criminalesAlaVista.jpg'
import laSociedadDeLaNieve from '../assets/laSociedadDeLaNieve.jpg'
import interstellar from '../assets/interestellar.webp'
import spiderman from '../assets/spiderman.jpg'
import equipaje from '../assets/equipaje.webp'
import campamento from '../assets/campamento.jpg'
import papas from '../assets/papas.jpg'
import nino from '../assets/nino.jpg';



const MovieList = ({watchlist, setWatchlist}) => {

  const movies = [
        { id: 1, title: 'La Sociedad de la Nieve', image: laSociedadDeLaNieve },
        { id: 2, title: 'Spiderman', image: spiderman },
        { id: 3, title: 'Equipaje de mano', image: equipaje },
        { id: 4, title: 'Criminales a la vista', image: criminalesAlaVista },
        { id: 5, title: 'Interstellar', image: interstellar },
        { id: 6, title: 'Campamento con Mamá', image: campamento },
        { id: 7, title: 'Los Dos Papas', image: papas },
        { id: 8, title: 'El niño que domó el viento', image: nino },
  ];

  console.log(movies);
      
  const addWatchList = (movie) =>{
    
    // Evita duplicados en la watchlist
    if (!watchlist.some((item) => item.id === movie.id)) {
     setWatchlist([...watchlist, movie]);
     localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
   }
 }
    
  
  
  return (
    <div className="bg-[#350202] min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#f087d2] text-center mb-6">Peliculas - MovieList</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
        {movies.map((movie, id)=> (
            <MovieCard key={id} title={movie.title} image={movie.image} addWatchList={() => addWatchList(movie)}/>
        ))}
      </div>
    </div>
  )
}

export default MovieList