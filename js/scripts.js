// Variáveis e seleção de elementos
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

// Função para obter dados do clima
const getWeatherData = async (city, apiKey) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

// Função para exibir os dados do clima
const showWeatherData = async (city, apiKey) => {
    const data = await getWeatherData(city, apiKey);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
   // countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
}

// Carregar a chave da API do arquivo config.json
fetch('/config.json')
    .then(response => response.json())
    .then(data => {
        const apiKey = data.API_KEY;

        // Eventos
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const city = cityInput.value;
            showWeatherData(city, apiKey);
        });

        cityInput.addEventListener("keyup", (e) => {
            if (e.code === "Enter") {
                const city = e.target.value;
                showWeatherData(city, apiKey);
            }
        });
    })
    .catch(error => console.error("Erro ao carregar a chave da API:", error));
