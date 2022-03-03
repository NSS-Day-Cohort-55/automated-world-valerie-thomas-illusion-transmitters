//here's wher the imports go

import { getCelebs, getLandmarks, getCities } from "./ukraineData.js";
import { htmlCelebWriter, htmlLandmarkWriter, htmlCityWriter } from "./ukraineHTML.js";

export const ukraineCityLister = () => {
    const cityList = getCities();
    const contentElement = document.querySelector(".cityBox")
    let cityHTMLrep= "";
    cityList.map(cities=>{
        cityHTMLrep+=htmlCityWriter(cities)
    })

    contentElement.innerHTML =`${cityHTMLrep}`;
    
}

export const ukraineLandmarkLister = () => {
    const landmarkList = getLandmarks();
    const contentElement = document.querySelector(".landmarkBox")
    let landmarkHTMLrep= "";
    landmarkList.map(landmarks=>{
        landmarkHTMLrep+=htmlLandmarkWriter(landmarks)
    })

    contentElement.innerHTML =`${landmarkHTMLrep}`;
    
}

export const ukraineCelebLister = () => {
    const celebList = getCelebs();
    const contentElement = document.querySelector(".celebrityBox")
    let celebHTMLrep="" 
    celebList.map(celebs=>{
        celebHTMLrep+=htmlCelebWriter(celebs)
    })
   
    contentElement.innerHTML =`${celebHTMLrep}`;
    
}
