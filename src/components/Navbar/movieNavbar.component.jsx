import React, { useContext } from "react";
import { BiChevronRight,
     BiSearch, 
     BiMenu,
      BiChevronDown, 
      BiShareAlt } from 'react-icons/bi';

// Context
import {MovieContext} from "../../context/movie.context";

const NavSm = () => {

const { movie } = useContext(MovieContext);
    return  <>
    <div className="text-white flex items-center justify-between">
        <div>
        <h3 className="text-xl font-bold">{movie.original_title}</h3>
    </div>
    <div className="w-7 h-7">
    <BiShareAlt className="w-full h-full text-gray-400" />
        </div>
        </div>
    </>

};

const NavLg = () => {
    return <>
    <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
        <div className="flex items-center justify-between h-12 text-white text-xl font-medium w-ring-4"> 
            book
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                alt="BMS" 
                className="w-full h-full" />
                show
            </div>
            <div className="ml-6 w-full h-full flex item-center gap-3 bg-white px-3 py-2 rounded-md">
    <BiSearch/>
        <input type="search" className="w-full h-full bg-transparent border-none 
        focus:outline-none" 
         placeholder="search for Movies, Events, Plays, Sports and Activities" />
    </div>
        </div> 
        <div className="flex items-center gap-3">
        <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
            Indore <BiChevronDown />
        </span>
        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
            </button>
            <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
            </div>
        </div>
        </div>
    </>;
};

const MovieNavbar = () => {
return <>
<nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-harshil-700 p-4">
    {/* Mobile screen */}
    <div className="md:hidden">
        <NavSm />
    </div>
    {/* Medium/Tab screen */}
    <div className="hidden md:block lg:hidden">
        <NavSm />
    </div>
    {/* Large screen */}
    <div className="hidden w-full lg:flex">
    <NavLg />
    </div>
</nav>
</>
};

export default MovieNavbar;
