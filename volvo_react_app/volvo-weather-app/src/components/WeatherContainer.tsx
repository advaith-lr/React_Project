import { WeatherCard } from "./WeatherCard/WeatherCard"

type conTainerProps = {
    whatDate : string;
}

let cities = ['Gothenburg','Stockholm', 'Mountain View', 'London', 'New York', 'Berlin'];

export const WeatherContainer = ({ whatDate } : conTainerProps ) => {
    return (
        <div data-testid="weather-container" style = {ContainerStyle}>
            <div className= "row">
            {cities.map( (city,index) => <WeatherCard key={ index } city = { city } whatDate = {whatDate} />)}
            </div>
            
        </div>
    )
}

const ContainerStyle = {
    margin: '20px'
}