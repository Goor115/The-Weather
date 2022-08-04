fetch("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f")
    .then(function (resp) { return resp.json()})
    .then(function (data) {
    console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temperatute").innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector(".disclaimar").textContent = data.weather[0]["description"];
    document.querySelector(".icon").innerHTML = '<img src= "http://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@2x.png">'
});