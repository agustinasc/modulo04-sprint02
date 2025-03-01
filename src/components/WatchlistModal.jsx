
const WatchlistModal = ({onClose, watchlist = [], setWatchlist}) => {

  const removerFromWatchlist = (id) => {
    const updateList = watchlist.filter(movie => movie.id !== id);
    setWatchlist(updateList);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 bg-opacity-60 backdrop-blur-sm px-2">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform transition-all scale-95 hover:scale-100 overflow-y-auto min-h-[50vh] max-h-[80vh]">
          <h2 className="text-xl font-bold mb-4">Mi Watchlist</h2>

          <button 
            onClick={onClose} 
            className="mt-4 w-full bg-[#f087d2] text-gray-900 py-2 rounded-md font-bold hover:bg-[#d06bb1] transition"
          >
          Cerrar
          </button>
        {
          watchlist.length === 0 ? (
            <p className='text-gray-400 text-center'>No hay peliculas en la Watchlist</p>
          ) : (    
            watchlist.map((movie)=> {
              return (
                <div 
                  key={movie.id}
                  className='flex justify-between items-center bg-gray-800 p-2 m-2 rounded-lg shadow'
                >
                  <img src={movie.image} alt={movie.title} className="w-12 h-12rounded-md object-cover mr-0.5" />
                  <p className="text-lg">{movie.title}</p>
                  <button 
                    className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition'
                    onClick={() => removerFromWatchlist(movie.id)}>
                    Eliminar
                  </button>
                </div>
              )
            })          
          )
        }
      </div>
    </div>
  </>
  )
}

export default WatchlistModal