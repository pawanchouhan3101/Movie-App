import { useMemo } from "react";
import { movies } from "./Data";

const Hero = ({ searchTerm, category }) => {

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
    <div className="bg-black text-red-600 min-h-screen flex flex-wrap justify-center items-start gap-6 p-6">

      {filteredMovies.length > 0 ? (
        filteredMovies.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-64 hover:scale-105 transition-transform duration-300"
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
  );
};

export default Hero;
