// Variáveis e Seleção de elementos

const apiKey = "b056807c79a2e802ed2d0fc4b2856e92"
const apiCountry = "https://flagsapi.com/flat/64.png"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector(".search");

const cityElement = document.querySelector(".city-name")

const countryElement = document.querySelector("#country")

const tempElement = document.querySelector("#temperature span")

const iconWeatherElement = document.querySelector("#weather-icon")

const umidityElement = document.querySelector("#umidity span")

const windElement = document.querySelector("#wind span")

const descElement = document.querySelector("#description-weather")

const weatherContainer = document.querySelector("#weather-data-container")






// Funções
const getWeatherData = async(city) => {
    const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const response = await fetch(apiweatherURL)
    const data = await response.json()

    console.log(data)

    return data 
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city)
    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    umidityElement.innerText = data.main.humidity  
    windElement.innerText = `${data.wind.speed}km/h`
    iconWeatherElement.setAttribute(
        "src", 
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    )

    countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/flat/64.png`)

    weatherContainer.classList.remove("hide")

}


// Eventos
searchBtn.addEventListener("click", (e) => {

    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)

})

