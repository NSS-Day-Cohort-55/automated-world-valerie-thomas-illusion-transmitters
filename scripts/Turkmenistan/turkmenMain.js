import { getHeader } from "../SharedComponents/navigation.js";
import { imageCarousel } from "./turkmenImages.js";
import { turkmenCelebLister, turkmenCityLister, turkmenLandmarkLister } from "./turkmenList.js";

getHeader();
turkmenCityLister();
turkmenLandmarkLister();
turkmenCelebLister();
imageCarousel();