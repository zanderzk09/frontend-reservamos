import { Routes, Route, } from "react-router-dom"
import { CityWeatherDetail, HomeWeatherDetail } from "../screens"



export const AppRoutes = () => {
  return (

    <>
      <Routes>

        <Route path="/" element={
          <HomeWeatherDetail/>
        } />


        <Route path="/details" element={

          <CityWeatherDetail />

        } />

      </Routes>
    </>


  )
}
