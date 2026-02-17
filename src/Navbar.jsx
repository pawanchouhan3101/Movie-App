import { useState } from "react";
import { Film, Search, Menu, Tv, Clapperboard } from "lucide-react";

const Navbar = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

 
  const handleCategory = (value) => {
    setCategory(value);
    setIsOpen(false); 
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
       
        <h1 className="flex items-center gap-2 text-2xl font-bold text-red-500 cursor-pointer">
          <Film size={28} />
          MovieApp
        </h1>

        
        <ul className="hidden md:flex space-x-10 font-medium">
          
          <li
            onClick={() => handleCategory("all")}
            className={`cursor-pointer ${
              category === "all"
                ? "text-red-500 font-bold"
                : "hover:text-red-400"
            }`}
          >
            Home
          </li>

          <li
            onClick={() => handleCategory("Movie")}
            className={`cursor-pointer flex items-center gap-1 ${
              category === "Movie"
                ? "text-red-500 font-bold"
                : "hover:text-red-400"
            }`}
          >
            <Clapperboard size={18} />
            Movies
          </li>

          <li
            onClick={() => handleCategory("TV Show")}
            className={`cursor-pointer flex items-center gap-1 ${
              category === "TV Show"
                ? "text-red-500 font-bold"
                : "hover:text-red-400"
            }`}
          >
            <Tv size={18} />
            TV Shows
          </li>
        </ul>

       
        <form
          onSubmit={(e) => e.preventDefault()}
          className="hidden md:flex items-center bg-gray-800 rounded-lg overflow-hidden"
        >
          <div className="px-3 text-gray-400">
            <Search size={18} />
          </div>

          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 px-2 py-2 outline-none text-sm"
          />
        </form>

       
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={30} />
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4">
          
          <ul className="flex flex-col space-y-3 font-medium">
            
            <li
              onClick={() => handleCategory("all")}
              className="hover:text-red-400 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => handleCategory("Movie")}
              className="hover:text-red-400 cursor-pointer flex items-center gap-2"
            >
              <Clapperboard size={18} />
              Movies
            </li>

            <li
              onClick={() => handleCategory("TV Show")}
              className="hover:text-red-400 cursor-pointer flex items-center gap-2"
            >
              <Tv size={18} />
              TV Shows
            </li>
          </ul>

         
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="px-3 text-gray-400">
              <Search size={18} />
            </div>

            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-gray-800 px-2 py-2 outline-none text-sm"
            />
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
