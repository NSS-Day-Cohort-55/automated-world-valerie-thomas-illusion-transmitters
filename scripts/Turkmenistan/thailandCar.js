export const imageCarousel = () => {
    const thailandImages = [
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
        height: "100px",
        width: "200px",
      },
      {
        src: "/Images/turkmenImages/crater.jpg",
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
    thailandImages.map((image) => {
      imagesHtml += formatImage(image)
                      
    }),
     imageContainer.innerHTML += imagesHtml
  };
  