//This is where all the data goes
//remeber to export it


const cities = [
    {
        name:"Dublin",
        pop:"1,255,963",
        url:"https://en.wikipedia.org/wiki/Dublin"
    },
    
    {
        name:"Belfast",
        pop:"638,717",
        url:"https://en.wikipedia.org/wiki/Belfast"
    },
    
]

const landmarks = [
    {
        name: "Cliffs of Moher",
        location: "County Clare",
        url: "https://en.wikipedia.org/wiki/Cliffs_of_Moher"
    },
    {
        name: "St. Patrick’s Cathedral",
        location:  "Dublin",
        url: "https://en.wikipedia.org/wiki/St._Patrick%27s_Cathedral"
    }
]

const celebs = [
    {
        name: "C.S. Lewis",
        occupation: "Writer",
        description: "(29 November 1898 – 22 November 1963) was a British writer and lay theologian. He is best known for his works of fiction, especially The Screwtape Letters, The Chronicles of Narnia, and The Space Trilogy.",
        page:"https://en.wikipedia.org/wiki/C._S._Lewis"
    },
    {
        name: "Angela Lansbury",
        occupation: "Actress / Singer",
        description: "(born 16 October 1925) is an Irish-British[2] actress and singer who has played many film, theater, and television roles. Her career has spanned over 80 years. Lansbury is one of the last surviving stars from the Golden Age of Hollywood cinema.",
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