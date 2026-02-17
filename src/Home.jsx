const Home = () => {
  return (
    <div className="relative w-full h-screen">
      
      
      <img
        src="/image/img1.jpg"
        alt="Poster of popular movies and TV shows"
        className="w-full h-full object-cover blur-sm"
      />

     
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Watch Your Favourite Movies <br /> and TV Shows.
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
          Your next favorite movie is just one click away. <br />
          <span className="text-red-400 font-semibold">
            Unlimited movies, endless entertainment.
          </span>
        </p>

       
        <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-semibold shadow-lg transition">
          Explore Now 
        </button>
      </div>
    </div>
  );
};

export default Home;
