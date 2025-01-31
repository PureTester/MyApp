"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";

type Data = { current: any; location: any };
export default function Waether() {
  const [waetherData, setWeathredata] = useState<Data | null>(null);
  const [city, setCity] = useState("");
  async function fetchData(CityName: string) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=928d66b312824ca588273244251601&q=` +
        CityName +
        `&aqi=no`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const jsonData = await response.json();
    if (jsonData?.current) setWeathredata(jsonData);
    if (jsonData?.error) setWeathredata(null);
  }
  async function fetchDataByLocation(latitude: number, longitude: number) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=928d66b312824ca588273244251601&q=${latitude},${longitude}` +
        `&aqi=no`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const jsonData = await response.json();
    if (jsonData?.current) setWeathredata(jsonData);
    if (jsonData?.error) setWeathredata(null);
  }
  console.log(waetherData);

  return (
    <div className="flex flex-col p-[60px] ml-[300px] w-[500px]  border border-[#2c3e50] rounded-lg shadow-sm bg-[#1e74e4] ">
      <title>Погода</title>
      <Sidebar />
      <div className="m-auto">
        <h1 />
        Погода
        <div className=" gap-2 flex flex-col">
          <input
            maxLength={60}
            data-id="wheatherInput"
            placeholder="Введите город"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? fetchData(city) : 0)}
            className="w-[200] px-3 py-1 border border-[#2c3e50] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-[#272a2c] transition-all"
          />

          <button
            data-id="searchCityBtn"
            type="submit"
            onClick={() => fetchData(city)}
            className="whitespace-nowrap w-[200] px-2 py-1 bg-[#000000] text-[#ecf0f1] rounded hover:bg-[#252525]"
          >
            Искать
          </button>
          <button
            data-id="searchCityByGeoBtn"
            className="whitespace-nowrap w-[200] px-2 py-1 bg-[#000000] text-[#ecf0f1] rounded hover:bg-[#252525]   "
            onClick={() =>
              navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchDataByLocation(latitude, longitude);
              })
            }
          >
            Искать по локации
          </button>
        </div>
        <div className="flex flex-row">
          {waetherData ? (
            <ul data-id="waetherData">
              <li>{waetherData?.location.name}</li>
              {waetherData?.current.condition.icon && (
                <Image
                  src={`https:${waetherData?.current.condition.icon}`}
                  alt="weatherPicture"
                  width={64}
                  height={64}
                />
              )}
              <li>Текущя температура: {waetherData?.current.temp_c}</li>
              <li>Ощущается как : {waetherData?.current.feelslike_c}</li>
              <li>Скорость ветра : {waetherData?.current.wind_kph}</li>
              <br></br>
              <li className="ml-10">
                Последнее обновление<br></br>
                {waetherData?.current.last_updated}
              </li>
            </ul>
          ) : (
            <span>Сосал?</span>
          )}
        </div>
      </div>
    </div>
  );
}
