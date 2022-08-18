import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BsFillCloudHazeFill } from "react-icons/bs";
function App() {
  const [city, setcity] = useState('mumbai')
  const [data, setdata] = useState({
    main: {
      temp: 0,
    
    },
    weather: [{ 
      description: '',
      icon: '',
      main: ''
    }],
    wind: { 
      speed: 0
    },
    name: ''



  })

  


 const fetchapi = ()=>{
  const apikey="653ff8da59fad982f84d5c74cfac9240";
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
   axios.get(url).then((response)=>{
     console.log(response.data);
     setdata(response.data);
   }).catch((error)=>{
      // console.log(error);
      alert("check spelling")
   })
 }
  return (
    <>
    <div className=' justify-center grid-cols-1 grid'>
      <div>

      <h1 className='text-center text-3xl mt-6 bg-cyan-400 p-3 rounded-lg ml-[25%] w-1/2'>Weather App</h1>
      </div>
      
    <div className="box armaan bg-cyan-600 rounded-xl shadow-lg" id="best">
     <div className="fs-3 " id="demoObject ">
       <input value={city} onChange={(e)=>setcity(e.target.value)} className="mt-5 outline-none focus:outline-none text-white p-3 border-b-2 bg-transparent hover:border-black shadow-2xl rounded-lg " type="text" id="demoInpt" placeholder="Enter City Name" />
       <button onClick={fetchapi} onChange={(e)=>e.target.value} type="button" className="bg-black text-white p-2 rounded-lg mt-3 " id="demoButto">search</button>
       <div className="text-black mx-auto location w-full rounded-lg shadow-lg  bg-white fs-1 my-5">
         <h1 className="loc text-cyan-500 text-center pt-6 font-extrabold">
         {data.name}
         </h1>
       <h1 className='text-6xl text-center p-3'>
      {Math.round(data.main.temp-273.15)}°C

       </h1>
       <p>  
        </p>
       <h1 className='text-center'><BsFillCloudHazeFill style={{fontSize:"70px"}}/>
       
       </h1>
       {data.weather[0].main}
       </div>
       
       </div>
      
      </div>


    </div>
    </>
  );
}

export default App;
