export const imageCarousel = () => {
  const turkmenImages = [
    {
      src: "/Images/turkmenImages/crater.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/head.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/Neutrality.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/ruins-of-merv.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/wedding-palace.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/gurbanguly-berdimuhamedow-weightbar.png",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/Kurban_Berdyev.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/birds.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/statue.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/mosque.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/oldpres.jpg",
      height: "100px",
      width: "200px",
    },
    {
      src: "/Images/turkmenImages/ash_statues.jpg",
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
  turkmenImages.map((image) => {
    imagesHtml += formatImage(image)
                    
  }),
   imageContainer.innerHTML += imagesHtml
};
