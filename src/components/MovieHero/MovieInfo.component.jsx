import React,{ useContext, useState } from "react";

// Components
import PaymentModal from "../PaymentModal/Payment.component";

// Context
import {MovieContext} from "../../context/movie.context";

const MovieInfo = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ price, setPrice ] = useState(0);


    const { movie } = useContext(MovieContext);

// Optional Chaining
const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
            setIsOpen(true);
            setPrice(149);
    };
    const buyMovies = () => {
        setIsOpen(true);
        setPrice(689);
};

    return (
        <> 
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-3 lg:gap-7">
            <div className="flex items-center gap-3 md:px-4">
                <div className="w-40 h-8">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" 
                    alt="Premier"
                    className="w-full h-full" 
                    />
                </div>
                <span className="bg-gray-700 py-1 text-xs text-white rounded-md">Streaming Now</span>
            </div>
            <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">{movie.original_title}</h1>
            
            <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
            <div className="text-white font-light flex flex-col gap-2 md:px-4">
                <h4>&nbsp;&bull;&nbsp;{movie.original_language} &nbsp; &bull; Languages: <font color="F84454"> &nbsp;Audio(1),Subtitles(1)</font></h4>
                <h4 className="text-white">&nbsp;&bull;&nbsp;4k &nbsp;&bull;&nbsp;{(movie.runtime / 60).toFixed(2) } h &nbsp;&bull; &nbsp;{genres} &nbsp; &bull; &nbsp;13+ &bull; &nbsp;18 Mar, 2021</h4>
            </div>
            <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                <button onClick={rentMovies} className="bg-harshilredcolor-300 w-full py-3 text-white font-semibold rounded-lg">Book tickets</button>
                <button onClick={buyMovies} className="bg-harshilredcolor-300 w-full py-3 text-white font-semibold rounded-lg">Buy or Rent</button>
            </div>
            </div>

        </div>
        
        
        </>
    );
};

export default MovieInfo;
