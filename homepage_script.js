const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31e9d426c1msh8becb6465e33c76p1b3248jsn4d133c67793e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




const getweather = (city) => {

	cityname.innerHTML = city;
	citynamee.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		temp.innerHTML = response.temp;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		cloud_pct.innerHTML = response.cloud_pct;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		wind_speed.innerHTML = response.wind_speed;
		wind_degrees.innerHTML = response.wind_degrees;
		// sunrise.innerHTML = response.sunrise;
		// sunset.innerHTML = response.sunset;

		console.log(response)})
	.catch(err => console.error(err));
}
btn.addEventListener("click" , (e) =>{
	e.preventDefault();
	getweather(city.value);
})

getweather("Delhi");




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {

		tempdelhi.innerHTML = response.temp;
		humiditydelhi.innerHTML = response.humidity;
		wind_speeddelhi.innerHTML = response.wind_speed;

		console.log(response)})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana', options)
	.then(response => response.json())
	.then((response) => {

		tempharyana.innerHTML = response.temp;
		humidityharyana.innerHTML = response.humidity;
		wind_speedharyana.innerHTML = response.wind_speed;

		console.log(response)})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Allahabad', options)
	.then(response => response.json())
	.then((response) => {

		tempallahabad.innerHTML = response.temp;
		humidityallahabad.innerHTML = response.humidity;
		wind_speedallahabad.innerHTML = response.wind_speed;

		console.log(response)})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurugram', options)
	.then(response => response.json())
	.then((response) => {

		tempgurugram.innerHTML = response.temp;
		humiditygurugram.innerHTML = response.humidity;
		wind_speedgurugram.innerHTML = response.wind_speed;

		console.log(response)})
	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {

		tempmumbai.innerHTML = response.temp;
		humiditymumbai.innerHTML = response.humidity;
		wind_speedmumbai.innerHTML = response.wind_speed;

		console.log(response)})
	.catch(err => console.error(err));