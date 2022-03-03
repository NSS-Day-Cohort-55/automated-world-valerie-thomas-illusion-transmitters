const cities = [
    {
        name: "Bangkok",
        population: "10.539 million",
        funFact: "The King's Anthem is played before movies and cultural performances.",
        url: "https://en.wikipedia.org/wiki/Bangkok"
    },
    {
        name: "Chiang Mai",
        population: "127,240",
        funFact: "Chiang Mai is surrounded by Mountains",
        url: "https://en.wikipedia.org/wiki/Chiang_Mai"
    },
    {
        name: "Phuket",
        population: "79,308",
        funFact: "Although Phuket Island is the biggest Island in Phuket Province, there are 32 other smaller islands surrounding it.",
        url: "https://en.wikipedia.org/wiki/Phuket_province"

    }

]

const landmarks = [
    {
        name: "Grand Palace",
        location: "Wat Phra Kaew",
        url: "https://en.wikipedia.org/wiki/Grand_Palace"
    },
    {
        name: "Wat Rong Khun",
        location: "Mueang Chiang Rai district",
        url: "https://en.wikipedia.org/wiki/Wat_Rong_Khun"
    },
    {
        name: "Haew Suwat Waterfall",
        location: "Khao Yai National Park",
        url: "https://www.takemetour.com/landmark/haew-suwat-waterfall"
    }
    

]

const famousCitizens = [
    {
        name: "Buakaw Banchamek",
        occupation: "Boxer",
        age: "39",
        url: "https://en.wikipedia.org/wiki/Buakaw_Banchamek"
    },
    {
        name: "Tony Jaa",
        occupation: "Martial Artist,",
        age: "46",
        url: "https://en.wikipedia.org/wiki/Tony_Jaa"
    },
    {
        name: "Mario Maurer",
        occupation: "Actor",
        age: "33",
        url: "https://en.wikipedia.org/wiki/Mario_Maurer"
    }

]

export const getCities = () =>{
    return cities
}

export const getLandmarks = () => {
    return landmarks
}

export const getFamousCitizen = () => {
    return famousCitizens
}