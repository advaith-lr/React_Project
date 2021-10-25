import { WeatherCard , calculateCtoF, calculateFtoC } from './WeatherCard';


test("cToF", ()=>{
    expect(calculateCtoF(1)).toBe(33.8)
})

test("fToC", ()=>{
    expect(calculateFtoC(32)).toBe(0)
})
