export const imageCarousel = () => {
    const ukraineImages = [
      {
        src: "/Images/ukraineImages/independence-square-kiev-ukraine_4x3.webp",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/ukraineImages/ukraineLand.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/ukraineImages/kiev-banner.jpg",
        height: "100px",
        width: "200px",
      },
      
    ];
    const formatImage = ((img)=>{
        return(
  
            `<div class='imageItem'>
            <img class='turkImage' src=${img.src} height=${img.height} width=${img.width} alt='Trukmenistan Image'/>
        </div>`
        )
    })
    const imageContainer = document.querySelector(".imageContainer");
    let imagesHtml = "";
    ukraineImages.map((image) => {
      imagesHtml += formatImage(image)
                      
    }),
     imageContainer.innerHTML += imagesHtml
  };