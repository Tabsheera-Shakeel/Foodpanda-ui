import React from 'react';

function Header(){
    return(
    <header className="font-sans">
        <div className="bg-pink-600 flex justify-between items-center p-3 text-sm  text-white">
          <div className="flex items-center gap-2">
            <img src="https://www.foodpanda.com/wp-content/uploads/2023/10/Pau-Pau-image-2-1-1-1-1-1.png" 
            width="70px "
            alt="Foodpanda icon"></img>
          </div>

          <h2 className="text-center flex-1 text-xs md:text-sm">Do you need a business account?
          </h2>
          <button className="border border-white rounded-md text-xs h-7 px-2 py-1 ">SIGN UP NOW</button>
        </div>
        <div  className="flex justify-between items-center bg-white rounded-2xl py-3">
            <img className="ml-5" src="https://cdn.worldvectorlogo.com/logos/foodpanda-logo.svg" width="80px" alt='foodpanda brand logo'></img>
         
         <div className="flex items-center space-x-2">
            <button className="border border-black rounded-md text-xs w-20 h-8 px-2 py-1" type='button'>Log in</button>
            <button className=" bg-pink-600 text-white rounded-md text-xs h-8 w-24 px-2 py-1" type='button'>Sign up</button>
            <img className="w-8 h-8" src="https://micro-assets.foodora.com/img/ic-rider-icon.svg" width="30px" alt='rider icon'></img>
       </div>


        </div>
    </header>

    )
}

export default Header
