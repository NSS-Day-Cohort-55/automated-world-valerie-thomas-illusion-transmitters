//HTML interpolation

export const htmlLandmarkWriter = (uObj) => {
    return `<div class="info-card">
            <a href="${uObj.url}">
                <h3>${uObj.name}</h3>
            </a>
            <p>See it at ${uObj.location}</p>
            <p>Created: ${uObj.created}</p>
        </div>`
}

export const htmlCityWriter = (uObj) => {
   return `<div class="info-card">
            <a href="${uObj.url}">
                <h3>${uObj.name}</h3>
            </a>
            <p>Population ${uObj.pop}</p>
            <p>${uObj.description}</p>
        </div>`
}

export const htmlCelebWriter = (uObj) => {
   return `<div class="info-card">
            <a href="${uObj.page}">
                <h3>${uObj.name}</h3>
            </a>
            <p>${uObj.occupation}</p>
            <p>${uObj.description}</p>
            
        </div>`
}