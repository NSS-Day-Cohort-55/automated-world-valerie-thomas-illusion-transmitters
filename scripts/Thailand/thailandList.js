import { getCities, getLandmarks, getFamousCitizen } from "./thailandData.js";
import { htmlCityWriter, htmlLandmarkWriter, htmlCelebWriter } from "./thailandHTML.js";

export const thailandCityLister = () => {
    const cityList = getCities();
    const contentElement = document.querySelector(".cityBox")
    let cityHTMLrep = "";
    cityList.map(cities => {
        cityHTMLrep += htmlCityWriter(cities)
    })

    contentElement.innerHTML = `${cityHTMLrep}`;

}

export const thailandLandmarkLister = () => {
    const landmarkList = getLandmarks();
    const contentElement = document.querySelector(".landmarkBox")
    let landmarkHTMLrep = "";
    landmarkList.map(landmarks => {
        landmarkHTMLrep += htmlLandmarkWriter(landmarks)
    })

    contentElement.innerHTML = `${landmarkHTMLrep}`;

}

export const thailandCelebLister = () => {
    const celebList = getFamousCitizen();
    const contentElement = document.querySelector(".celebrityBox")
    let celebHTMLrep = ""
    celebList.map(celebs => {
        celebHTMLrep += htmlCelebWriter(celebs)
    })

    contentElement.innerHTML = `${celebHTMLrep}`;

}


