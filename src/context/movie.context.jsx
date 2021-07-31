import React, { useState } from "react";

export const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {

const [movie,setMovie] = useState( {
        id:0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path: "",
        release_date: "",
    }
);

return (
    <div>
<MovieContext.Provider value={{ movie, setMovie }}>
     {children}
     </MovieContext.Provider>
</div>
)
};

export default MovieProvider;