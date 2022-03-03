//This is where all the data goes
//remeber to export it


const cities = [
    {
        name:"Ashgabat",
        pop:"1,032,000",
        url:"https://en.wikipedia.org/wiki/Ashgabat"
    },
    
    {
        name:"Darvaza",
        pop:"350",
        url:"https://en.wikipedia.org/wiki/Darvaza#:~:text=Darvaza%20(from%20Persian%3A%20%D8%AF%D8%B1%D9%88%D8%A7%D8%B2%D9%87%2C,260%20km%20north%20of%20Ashgabat."
    },
    
]

const landmarks = [
    {
        name: "Darvaza Gas Crater",
        location: "Darvaza",
        url: "https://en.wikipedia.org/wiki/Darvaza_gas_crater"
    },
    {
        name: "Neutrality Monument",
        location:  "Ashgabat",
        url: "https://en.wikipedia.org/wiki/Neutrality_Monument"
    }
]

const celebs = [
    {
        name: "Gurbanguly Berdimuhamedow",
        occupation: "Politician",
        description: "Gurbanguly Mälikgulyýewiç Berdimuhamedow is a Turkmen politician who has served as the president of Turkmenistan since 2006. Berdimuhamedow, a dentist by profession, served in the government under President Saparmurat Niyazov as minister of health beginning in 1997 and as deputy prime minister beginning in 2001. He became acting president following Niyazov's death on 21 December 2006 and subsequently won the February 2007 presidential election. He faced no meaningful opposition in the vote and won by an overwhelming margin. In the February 2012 presidential election, he was re-elected with 97% of the vote. He uses the honorific title Arkadag, meaning 'Patron'.",
        page:"https://en.wikipedia.org/wiki/Gurbanguly_Berdimuhamedow"
    },
    {
        name: "Saparmurat Niyazov",
        occupation: "Politician",
        description: "Saparmurat Atayevich Niyazov was a Turkmen politician who served as the leader of Turkmenistan from 1985 until his death in 2006. He was First Secretary of the Turkmen Communist Party from 1985 until 1991 and continued to lead Turkmenistan for 15 years after independence from the Soviet Union in 1991. Turkmen media referred to him using the title 'His Excellency Saparmurat Türkmenbaşy, President of Turkmenistan and Chairman of the Cabinet of Ministers'. His self-given title Türkmenbaşy, meaning Leader of Turkmen, referred to his position as the founder and president of the Association of Turkmens of the World. Foreign media criticized him as one of the world's most totalitarian and repressive dictators, highlighting his reputation of imposing his personal eccentricities upon the country, which extended to renaming months, which had been borrowed Russian words, after members of his family. Global Witness, a London-based human rights organization, reported that money under Niyazov's control and held overseas may be in excess of US$3 billion, of which between $1.8–$2.6 billion was supposedly situated in the Foreign Exchange Reserve Fund at Deutsche Bank in Germany.",
        page:"https://en.wikipedia.org/wiki/Saparmurat_Niyazov"
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