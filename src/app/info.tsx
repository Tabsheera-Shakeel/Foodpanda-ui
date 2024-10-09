import Image from "next/image"
function Info(){

    return(
        <div className="w-full flex flex-col items-center -mt-2">

        <h1 className="text-xl font-bold mb-4 text-center">You prepare the food, we handle the rest</h1>
        <div className="relative w-full h-64 md:h-80">
        <Image 
            src="https://images.deliveryhero.io/image/foodpanda/home-vendor-pk.jpg?width=1264&height=808.96"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>

    
    <h2 className="text-xl font-bold mb-4 text-center mt-4">Find us in these cities and many more!</h2>
    <div className="flex justify-center w-full flex-wrap">
    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/94/09/b8/9409b843993812cf38a16ca8fbd2c79e.jpg"
            layout="fill"
            objectFit="cover"
            alt="" 
            priority 
          />
    </div>

    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/d0/08/1d/d0081d21669590dc1fe4f74cbc60564b.jpg"
            layout="fill"
            objectFit="cover"
            alt="" 
            priority 
          />
    </div>

    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/69/f7/ed/69f7ed24ea81be50df3fb71c9f8f9f71.jpg"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>
    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/51/5a/56/515a565e1569b5155d3e4208499dd102.jpg"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>
    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/25/1b/f4/251bf425e09242cd6c8ed9be4d4f5113.jpg"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>
    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/9a/2a/8f/9a2a8fe95c53701c1bf710bf6d782539.jpg"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>
    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/07/36/f4/0736f4dce8a4d2f7d3652a5a848639a3.jpg"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>
    <div className="relative w-1/3 m-2 h-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
            src="https://i.pinimg.com/564x/5a/f4/78/5af4787212358ffbb5905025f027482b.jpg"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>
    </div>
    <h1 className="text-xl font-bold mb-4 text-center mt-5 bg-pink-600 text-white h-8 w-full">Put us in your pocket</h1>
        <div className="relative w-60 h-52 ">
        <Image 
            src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=1264&height=1004.88"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
    </div>

       <div className="bg-pink-600 flex flex-col-reverse md:flex-row items-start mb-10 mt-3 w-full min-h-[300px]">
 
  <div className="flex flex-col items-start m-4 md:m-9 w-full md:w-1/2">
    <h3 className="m-3 mt-0 font-serif text-xl font-semibold text-white">
      Download the food and groceries you love
    </h3>
    <p className="m-3 mt-0 font-serif text-lg text-white">
      It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.
    </p>
  </div>


  <div className="w-full md:w-1/2 flex justify-center items-center">
    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-4 md:mt-2">
      <Image 
        src="https://www.foodpanda.com/wp-content/uploads/2024/07/mfo3-1-500x1024.png"
        layout="fill"
        objectFit="contain"
        alt="Foodpanda homepage banner"
        priority
      />
    </div>
  </div>
</div>
    
      <div className="flex items-start m-9 w-full mt-1 ">
      <div className="w-1/2"> 
     <h3 className="m-2 mt-0 font-serif  text-xl font-semibold text-slate-900e">Take your office out to lunch</h3>

      
      <div className="relative w-full h-[160px]  ">
      <Image 
            src="https://images.deliveryhero.io/image/foodpanda/home-corporate-pk.jpg?width=1264&height=808.96"
            layout="fill"
            objectFit="cover"
            alt="Foodpanda homepage banner" 
            priority 
          />
      </div>
      </div>

      <div className="w-1/2 font-serif mt-14 ml-3 flex flex-col justify-start items-start">
      <p className="m-2 text-xl font-normal text-slate-900e">foodpanda for business</p>
     <p className="m-2 text-base text-slate-600">Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>  
     </div>
      </div>
</div> 
    )
}

export default Info
