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
      console.log(error);
   })
 }
  return (
    <>
    <div>
      
    <div className="box armaan" id="best">
     <div className="fs-3 " id="demoObject ">
       <input value={city} onChange={(e)=>setcity(e.target.value)} className="my-5" type="text" id="demoInput" placeholder="Enter City Name" />
       <button onClick={fetchapi} onChange={(e)=>e.target.value} type="button" className="btn btn-dark fs-4" id="demoButton">search</button>
       <div className=" mx-auto location fs-1 my-5">
         <h1 className="loc">
         {data.name}
         </h1>
       <h1 className='mx-auto'>
      {Math.round(data.main.temp-273.15)} °C

       </h1>
       <p>  
        </p>
       <h1><BsFillCloudHazeFill style={{fontSize:"70px"}}/>
       
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
