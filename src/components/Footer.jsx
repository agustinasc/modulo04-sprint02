const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-gray-300 py-6 px-6 flex items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col items-center space-y-4 text-center">
        
        {/* Texto principal */}
                <p className="text-sm sm:text-base text-gray-400">
                    MODULO 4 - REACT - DIPLOMATURA UNIVERSITARIA DESARROLLO WEB FULL STACK CON JAVASCRIPT
                </p>

        {/* Enlace a GitHub */}
                    <a
                    href="https://github.com/agustinasc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-teal-400 hover:text-pink-400 transition-colors duration-300"
                    >
                        <i className="ph ph-github-logo text-2xl"></i>
                        <span className="font-['Orbitron'] text-sm sm:text-base">
                            github.com/agustinasc
                        </span>
                    </a>

        {/* Derechos de autor */}
                <p className="text-sm sm:text-base text-gray-500">
                    &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer