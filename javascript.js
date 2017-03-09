var callApi = function() {
    town = document.getElementById('ville').value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + town + "&APIKEY=ca9770e3fc2bf89e08cc301b819fb83a&lang=fr&units=metric";
    req.open('GET', url, false);
    req.send(null);
};

var req = new XMLHttpRequest();
req.onreadystatechange = function() { // cette fonction s'exécute à chaque fois que readyState change > à une nouvelle requête
    console.log(req.readyState);
    if (req.readyState == 4) { // je n'effectue du code que si
        if (req.status == 200) {
            console.log(req.responseText);
            var response = JSON.parse(req.responseText); // converti JSON en objet JS
            let iconCode = response.weather[0].icon;
            let weatherIcon = 'http://openweathermap.org/img/w/' + iconCode + '.png';
            var description = response.weather[0].description; // accède à l'objet
            document.getElementById("weather").innerHTML = "Le temps à " + town + " est actuellement " + description + "<img src=" + weatherIcon + ">";
            var temp = response.main.temp; // accède à l'objet
            document.getElementById("temp").innerHTML = " et la température est de " + Math.round(temp) + "°C.";
        }
    }
};
