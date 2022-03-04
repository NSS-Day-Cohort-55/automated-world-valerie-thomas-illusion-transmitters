export const imageCarousel = () => {
    const thailandImages = [
      {
        src: "/Images/thailandimages/Bangkok.jpeg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/buakawBanchamek.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/ChiangMai.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/GrandPalace.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/haew-suwat-waterfall.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/MarioMaurer.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/Phuket.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/TonyJaa.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/thailandimages/Wat_Rong_Khun_-_Chiang_Rai.jpg",
        height: "100px",
        width: "200px",
      }
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
    thailandImages.map((image) => {
      imagesHtml += formatImage(image)
                      
    }),
     imageContainer.innerHTML += imagesHtml
  };
  