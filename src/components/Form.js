import{useState}from "react";
import axios from "axios";


const Form = () =>{
    const[city,setCity] = useState("");
    const getWeather =(e) =>{
        e.preventDefault();
        axios.get("http://api.weatherapi.com/v1/current.json?key=0c82c4c554114dce92f114137210705&q=London&aqi=no")
        .then(res =>console.log(res))
    }

    return(

        <form>
            <input type = "text" name="city" placeholder="cityname" onChange={e => setCity(e.target.value)}/>
            <button type = "submit" onClick ={getWeather}>Get weather</button>
        </form>

    );
};

export default Form;
