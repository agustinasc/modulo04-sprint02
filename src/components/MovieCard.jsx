
const MovieCard = ({title, image, addWatchList}) => {
  /* console.log(title, image); */ 
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition flex flex-col justify-between items-center w-[250px]">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-md"/>
        <h3 className="text-lg text-white md:text-xl font-bold text-center p-2">{title}</h3>
        <button 
          className="bg-[#4ECDC4] text-gray-900  hover:bg-[#38b2ac] font-semibold w-2sm p-2 m-2 rounded-lg transition"
          onClick={addWatchList}
        >
          Agregar a Watchlist
        </button>
    
    </div>

  )
}

export default MovieCard