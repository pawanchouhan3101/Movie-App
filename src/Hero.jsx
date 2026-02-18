import { useMemo, useState } from "react";
import { movies } from "./Data";
import {  X } from "lucide-react";


const Hero = ({ searchTerm, category }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    return movies.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "all" || item.type === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category]);

  return (
    <>
     <div className="bg-black min-h-screen flex flex-wrap justify-center items-start gap-6 p-6">

        {filteredMovies.length > 0 ? (
          filteredMovies.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMovie(item)}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {item.name}
                </h2>

                <p className="text-gray-400">
                  {item.type} • {item.year}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-2xl mt-10">
            No Results Found
          </p>
        )}

      </div>

      
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50">
          <div className="relative w-[85%] h-[85%]">

           
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute -top-10 right-0 text-white text-4xl"
            >
              <X/>
            </button>

            <iframe
              width="100%"
              height="100%"
              src={`${selectedMovie.video}?autoplay=1`}
              title={selectedMovie.name}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>

          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
