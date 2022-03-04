//HTML interpolation
export const htmlCityWriter = (uObj) => {
    return `<div class="info-card" >
            <a href="${uObj.url}" target="_blank" rel="noopener noreferrer">
            <h3>${uObj.name}</h3>
            </a>
            <p>Population ${uObj.population}</p>
            <p>Fun Fact: ${uObj.funFact}</p>
            </div>`
}

export const htmlLandmarkWriter = (uObj) => {
    return `<div class="info-card">
            <a href="${uObj.url}" target="_blank" rel="noopener noreferrer">
            <h3>${uObj.name}</h3>
            </a>
            <p>Location: ${uObj.location}</p>
            <p>Year Of Inception: ${uObj.inception}</p>
            </div>`
}

export const htmlCelebWriter = (uObj) => {
    return `<div class="info-card">
            <a href="${uObj.url}" target="_blank" rel="noopener noreferrer">
            <h3>${uObj.name}</h3>
            </a>
            <p>Occupation: ${uObj.occupation}</p>
            <p>Age: ${uObj.age}</p>
            </div>`
}