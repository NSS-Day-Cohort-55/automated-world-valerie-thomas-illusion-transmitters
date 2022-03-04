export const imageCarousel = () => {
  const irelandImages = [
    {
      src: "/Images/irelandImages/dublin.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/irelandImages/belfast.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/irelandImages/cork.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/irelandImages/cliffsOfMoher.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/irelandImages/rockOfCashel.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/irelandImages/stPatrickCathedral.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/irelandImages/csLewis.jpg",
      height: "100px",
      width: "150px",
    },
    {
      src: "/Images/irelandImages/angelaLansbury.jpg",
      height: "100px",
      width: "150px",
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
  irelandImages.map((image) => {
    imagesHtml += formatImage(image)
                    
  }),
   imageContainer.innerHTML += imagesHtml
};
