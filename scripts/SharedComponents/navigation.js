export const getHeader = ()=>{
const navContainer = document.querySelector('.navigationHeader')
    navContainer.innerHTML = (

       ` <nav>
         <div class="logo"><p>Logo</p></div>
         <div class='linkContainer'>
            <div class="navButton"><a href="/index.html">home</a></div>
            <div class="navButton"><a href="/countryHTMLs/ukraine.html">Ukraine</a></div>
            <div class="navButton"><a href="/countryHTMLs/ireland.html">Ireland</a></div>
            <div class="navButton"><a href="/countryHTMLs/turkmen.html">Turkmenistan</a></div>
            <div class="navButton"><a href="/countryHTMLs/thailand.html">Thailand</a></div>
            </div>
        </nav>`

    )
    
}

