//This is where all the data goes
//remeber to export it


const cities = [
    {
        name:"Ashgabat",
        pop:"1,032,000",
        url:"https://en.wikipedia.org/wiki/Ashgabat",
        description:"Ashgabat is the capital of Turkmenistan. It’s known for its white marble buildings and grandiose national monuments."
    },
    {
        name:"Türkmenabat",
        pop:"254,000",
        url:"https://en.wikipedia.org/wiki/T%C3%BCrkmenabat",
        description:"Türkmenabat, formerly and since medieval times, Chardzhou and in ancient times Āmul, is the second-largest city in Turkmenistan and the capital of Lebap Province."
    },
    {
        name:"Darvaza",
        pop:"350",
        url:"https://en.wikipedia.org/wiki/Darvaza#:~:text=Darvaza%20(from%20Persian%3A%20%D8%AF%D8%B1%D9%88%D8%A7%D8%B2%D9%87%2C,260%20km%20north%20of%20Ashgabat.",
        description:"Darvaza is a rural council in Ak bugdaý District, Ahal Province, Turkmenistan of about 350 inhabitants, located in the middle of the Karakum Desert, about 260 km north of Ashgabat. The rural council consists of three separate villages: Aeroport, Ataguýy, and Böri."
    }
    
]

const landmarks = [
    {
        name: "Darvaza Gas Crater",
        location: "Darvaza",
        url: "https://en.wikipedia.org/wiki/Darvaza_gas_crater",
        created: "1970's"
    },
    {
        name: "Neutrality Monument",
        location:  "Ashgabat",
        url: "https://en.wikipedia.org/wiki/Neutrality_Monument",
        created: 1998
    },
    {
        name: "Wedding Palace",
        location:  "Ashgabat",
        url: "https://en.wikipedia.org/wiki/Wedding_Palace_(Ashgabat)",
        created: 2011
    }
]

const celebs = [
    {
        name: "Gurbanguly Berdimuhamedow",
        occupation: "Politician",
        description: "Gurbanguly Berdymukhamedov serves as the head of one of the world's most secretive countries, leading a country with a widely-denounced human-rights record but becoming famous for his eccentric behaviour. Berdymukhamedov, who has been in power since 2006, is keen to present a strongman image, and often pulls flashy stunts. He drives classic cars and competes in horse races, shows off his love for music by DJing and writing raps, and once gave himself a giant gold-leaf statue in the center of the capital city.",
        page:"https://en.wikipedia.org/wiki/Gurbanguly_Berdimuhamedow"
    },
    {
        name: "Saparmurat Niyazov",
        occupation: "Politician",
        description: "Saparmurat Niyazov was the president of Turkmenistan from 1990 to 2006. He is most famous for renaming the months and days of the week in order to honor himself and his mother.",
        page:"https://en.wikipedia.org/wiki/Saparmurat_Niyazov"
    },
    {
        name: "Kurban Berdyev",
        occupation: "Soccer Player",
        description: "Kurban Berdyev is a Turkmenistani football coach and a former Soviet footballer. He is currently a head coach and a vice-president of Rubin.",
        page:"https://en.wikipedia.org/wiki/Kurban_Berdyev"
    }
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