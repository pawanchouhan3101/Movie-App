import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = ({ setCategory }) => {

 
  const handleFooterClick = (value) => {
    setCategory(value);

  
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white mt-2">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">

       
        <div>
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            MovieApp
          </h1>
          <p className="text-gray-400 max-w-xs">
            Discover and watch your favourite movies and TV shows anytime,
            anywhere.
          </p>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-gray-400">
            <li
              onClick={() => handleFooterClick("all")}
              className="hover:text-red-500 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => handleFooterClick("Movie")}
              className="hover:text-red-500 cursor-pointer"
            >
              Movies
            </li>

            <li
              onClick={() => handleFooterClick("TV Show")}
              className="hover:text-red-500 cursor-pointer"
            >
              TV Shows
            </li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <Instagram className="hover:text-red-500 cursor-pointer" />
            <Facebook className="hover:text-red-500 cursor-pointer" />
            <Twitter className="hover:text-red-500 cursor-pointer" />
            <Youtube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MovieApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
