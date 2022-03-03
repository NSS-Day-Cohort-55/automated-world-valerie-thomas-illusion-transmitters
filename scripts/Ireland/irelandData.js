//This is where all the data goes
//remeber to export it


const cities = [
    {
        name:"Dublin",
        pop:"1,255,963",
        url:"https://en.wikipedia.org/wiki/Dublin",
        knownFor: "The Guiness Storehouse"
    },
    
    {
        name:"Belfast",
        pop:"638,717",
        url:"https://en.wikipedia.org/wiki/Belfast",
        knownFor: "Creation of the RMS Titanic" 
    },
    {
        name:"Cork",
        pop:"190,384",
        url:"https://en.wikipedia.org/wiki/Cork_(city)",
        knownFor:  "The first potato was planted here"
    }
    
]

const landmarks = [
    {
        name: "Cliffs of Moher",
        location: "County Clare",
        url: "https://en.wikipedia.org/wiki/Cliffs_of_Moher",
        created: "320 million years ago."
    },
    {
        name: "St. Patrick’s Cathedral",
        location:  "Dublin",
        url: "https://en.wikipedia.org/wiki/St._Patrick%27s_Cathedral",
        created: "1191"
    },
    {
        name: "Rock of Cashel",
        location:  "Tipperary",
        url: "https://en.wikipedia.org/wiki/Rock_of_Cashel",
        created: "the 12th Century"
    }
]

const celebs = [
    {
        name: "C.S. Lewis",
        occupation: "Writer",
        description: "A British writer and lay theologian. Best known for his works of fiction, especially The Screwtape Letters, The Chronicles of Narnia, and The Space Trilogy.",
        page:"https://en.wikipedia.org/wiki/C._S._Lewis"
    },
    {
        name: "Angela Lansbury",
        occupation: "Actress / Singer",
        description: "An Irish-British actress and singer who has played many film, theater, and television roles. Lansbury is one of the last surviving stars from the Golden Age of Hollywood cinema.",
        page:"https://en.wikipedia.org/wiki/Angela_Lansbury"
    },
]


//This is where the export functions go

export const getCities = () => {
    return cities;
}

export const getLandmarks = () => {
    return landmarks;
}

export const getCelebs = () => {
    return celebs;
}