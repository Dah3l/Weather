import axios from 'axios'
const lat = 23.135305;
const lon = -82.3589631;
const provincias = {
    "Habana" : {
        lat: 23.135305,
        lon: -82.3589631
    },
    "Camaguey": {
        lat: 21.3839,
        lon: -77.9072
    }
}
const getProvincia = async (lat, lon) => {
const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${provincias["Camaguey"].lat}&lon=${provincias["Camaguey"].lon}&appid=8927de101f124867f4907bed78278c24`);
    return data;
}

export default getProvincia;