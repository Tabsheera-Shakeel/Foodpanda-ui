import Image from "next/image"
import Info from "./info";
import Footer from "./footer";

function Home(){

  return(
    <div className=" flex flex-col items-center w-full min-h-screen p-4">
     
     <div className="bg-slate-100 flex flex-col-reverse items-start mb-10 md:flex-row w-full">
      <div className="flex flex-col items-start m-9 ">
     <h1 className="m-3 mt-10 font-serif  text-xl md:text-2xl font-semibold text-gray-800">Its the food and groceries you love&#44; delivered</h1>
      <input className="border-slate-300 w-full md:w-72 border rounded-md h-10 p-2" type="text" placeholder="Your street and street number" name="serachbar"></input>
       <button className="bg-pink-600 full md:w-auto text-xs items-center mt-3 p-2 text-white h-10 rounded-md">Find Food</button>
     </div>
     
     <div className="relative w-full md:w-1/2 h-64 md:h-96">
      <Image className=""
            src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
      </div>
      </div>
  <Info/>
  <Footer/>
      <br></br>
   
     </div>
    
  )
}

export default Home;
