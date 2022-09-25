
const getProvincia = async ()=>{
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?lang=es&lat=23.135305&lon=-82.3589631&lang=es&appid=8927de101f124867f4907bed78278c24')
    .then((resp) => resp.json());
    return data;
}

export default getProvincia;