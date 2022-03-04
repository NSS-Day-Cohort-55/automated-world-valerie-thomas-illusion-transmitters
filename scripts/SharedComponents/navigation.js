export const getHeader = ()=>{
const navContainer = document.querySelector('.navigationHeader')
    navContainer.innerHTML = (

       ` <nav>
         <div class="logo"><img src="/Images/Valerie_Thomas_Illusion_Transmitters_logos_white.png" alt="logo"></div>
         <div class='linkContainer'>
            <div class="navButton"><a href="/index.html">Home</a></div>
            <div class="navButton"><a href="/countryHTMLs/ukraine.html">Ukraine</a></div>
            <div class="navButton"><a href="/countryHTMLs/ireland.html">Ireland</a></div>
            <div class="navButton"><a href="/countryHTMLs/turkmen.html">Turkmenistan</a></div>
            <div class="navButton"><a href="/countryHTMLs/thailand.html">Thailand</a></div>
            </div>
        </nav>`

    )
    
}

