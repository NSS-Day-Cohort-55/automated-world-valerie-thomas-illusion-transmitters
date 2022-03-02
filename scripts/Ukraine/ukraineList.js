//here's wher the imports go

import { getCelebs, getLandmarks, getCities } from "./ukraineData.js";
import { htmlCelebWriter, htmlLandmarkWriter, htmlCityWriter } from "./ukraineHTML.js";

export const ukraineCityLister = () => {
    const celebList = getCelebs();
    const contentElement = document.querySelector(".celebrityBox")
    let celebHTMLrep= "";
    for(const celeb of celebList){
        celebHTMLrep += htmlCelebWriter(celeb);
    }

    contentElement.innerHTML =`${celebHTMLrep}`;
    
}

// Start working on this tommorow
export const ukraineLandmarkLister = () => {
    const celebList = getCelebs();
    const contentElement = document.querySelector(".celebrityBox")
    let celebHTMLrep= "";
    for(const celeb of celebList){
        celebHTMLrep += htmlCelebWriter(celeb);
    }

    contentElement.innerHTML =`${celebHTMLrep}`;
    
}
export const ukraineCelebLister = () => {
    const celebList = getCelebs();
    const contentElement = document.querySelector(".celebrityBox")
    let celebHTMLrep= "";
    for(const celeb of celebList){
        celebHTMLrep += htmlCelebWriter(celeb);
    }

    contentElement.innerHTML =`${celebHTMLrep}`;
    
}
