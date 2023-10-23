export interface WeatherData {
  latitude: number
  longitude: number
  current_weather: CurrentWeather
  daily_units: DailyUnits
  daily: Daily
}


export interface CurrentWeather {
  temperature: number
  windspeed: number
  winddirection: number
}

export interface DailyUnits {
  temperature_2m_max: string
  temperature_2m_min: string
}

export interface Daily {
  temperature_2m_max: number[]
  temperature_2m_min: number[]
}
