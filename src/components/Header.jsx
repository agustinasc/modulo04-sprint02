
const Header = ({onOpenWatchlist} ) => {
  return (
    <header className="bg-gray-900 py-4 px-6 flex items-center justify-center shadow-md">
      <div className="w-full max-w-6xl flex items-center justify-between">
        
        {/* Logo y Título */}
        <div className="flex items-center space-x-4">
          <h1 className="font-['Orbitron'] text-2xl sm:text-3xl font-bold text-pink-400">
            NODO Cine 🎬🍿
          </h1>
        </div>

        {/* Watchlist y Usuario */}
        <div className="flex items-center space-x-6">
          
          {/* Botón Watchlist */}
          <button 
            onClick={onOpenWatchlist} 
            className="text-gray-300 text-lg sm:text-xl font-semibold hover:text-teal-400 transition-colors duration-300"
          >
            Abrir mi Watchlist
          </button>

          {/* Ícono de Usuario */}
          <i className="ph ph-user-circle bi bi-person-video text-4xl text-teal-400 hover:text-pink-400 cursor-pointer transition-colors duration-300"></i>
        
        </div>
      </div>
    </header>
  )
}

export default Header