//This is where all the data goes
//remeber to export it


const cities = [
    {
        name:"Kyiv",
        pop:"2,611,327",
        url:"https://en.wikipedia.org/wiki/Kyiv"
    },
    
    {
        name:"Kharkiv",
        pop:"1,029,049",
        url:"https://en.wikipedia.org/wiki/Kharkiv"
    },
    
]

const landmarks = [
    {
        name: "The Holy Dormition Kyiv Caves Lavra",
        location: "Kyiv",
        url: "https://en.wikipedia.org/wiki/Kyiv_Pechersk_Lavra"
    },
    {
        name: "Old Town",
        location:  "Lviv",
        url: "https://en.wikipedia.org/wiki/Old_Town_(Lviv)"
    }
]

const celebs = [
    {
        name: "Milla Jovovich",
        occupation: "Actress",
        description: "Milla Jovovich is an Ukrainian-born actress, supermodel, fashion designer, singer and public figure, who was on the cover of more than a hundred magazines, and starred in such films as The Fifth Element (1997), Ultraviolet (2006), and the Resident Evil (2002) franchise.",
        page:"https://www.imdb.com/name/nm0000170/bio?ref_=nm_ov_bio_sm"
    },
    {
        name: "Mila Kunis",
        occupation: "Actress",
        description: "Mila Kunis is an American actress. In 1991, at the age of seven, she and her Jewish family fled from Soviet Ukraine to the United States. At age 14, Kunis began playing Jackie Burkhart on the Fox television series That '70s Show (1998–2006). Since 1999, she has voiced Meg Griffin on the Fox animated series Family Guy.",
        page:"https://en.wikipedia.org/wiki/Mila_Kunis"
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