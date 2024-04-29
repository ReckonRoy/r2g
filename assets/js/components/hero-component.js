/*
 *@Author Le-Roy 
 */
customElements.define("hero-component", class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            .slideshow-container {
                position: relative;
                max-width: 1100px;
                margin: 0 auto;
                padding: 0 20px;
              }

              .hero {
                background-color: white;
                color: #fff;
                padding: 80px 0;
                text-align: center;
              }

          .carousel {
            display: flex;
            overflow: hidden;
          }

          /* Next & previous buttons */
          .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
          }

          /* Position the "next button" to the right */
          .next {
            right: 0;
            border-radius: 3px 0 0 3px;
          }

          /* On hover, add a black background color with a little bit see-through */
          .prev:hover, .next:hover {
            background-color: rgba(0,0,0,0.8);
          }


          .mySlides .content {
            position: absolute;
            top: 0%;
            left: 2%;
            right: 3%;
            z-index: 3;
            color: #fff;
            height: 250px;
          }

          .mySlides .overlay {
            position: absolute;
            background-color: black;
            top: 0%;
            left: 2%;
            right: 3.5%;
            z-index: 2;
            color: #fff;
            height: 250px;
            opacity: 0.5;
          }

          .mySlides .content h1 {
            font-size: 36px;
            margin-bottom: 20px;
          }

          .mySlides .content p {
            font-size: 18px;
            line-height: 1.6;
          }

          img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: rgba(0, 0, 0, 0.7);
          }

          .prev {
            left: 10px;
          }

          .next {
            right: 10px;
          }

          .active, .dot:hover {
            background-color: #717171;
          }

          /* Fading animation */
          .fade {
            animation-name: fade;
            animation-duration: 1.5s;
          }

          @keyframes fade {
            from {opacity: .4} 
            to {opacity: 1}
          }

          /* On smaller screens, decrease text size */
          @media only screen and (max-width: 300px) {
            .prev, .next,.text {font-size: 11px}
          }
        </style>
        <section class="hero">
        <div class="slideshow-container">
          <div class="carousel">
            <div class="mySlides fade">
              <div class="overlay"></div>	  
              <div class="content">
                <h1>R2G Funeral Parlor</h1>
                <p>At R2G Funeral Parlor, we understand the importance of honoring the lives of your loved ones with dignity and respect. With years of experience in the funeral industry, our compassionate team is here to guide you through every step of the funeral arrangement process.</p>
              </div>
                      <img src="./assets/img/slides/slide3.jpeg" alt="About Us" class="img-fluid rounded"></img>
            </div>
            <div class="mySlides fade">
                <div class="overlay"></div>	  
                      <div class="content">
                <h1>R2G Funeral Parlor</h1>
                <p>Honoring Lives with Dignity and Respect</p>
              </div>
                      <img src="./assets/img/slides/slide2.jpeg" alt="About Us" class="img-fluid rounded"></img>
            </div>
            <div class="mySlides fade">
                <div class="overlay"></div>	  
                      <div class="content">
                <h1>R2G Funeral Parlor</h1>
                <p>As we come together to say our final farewells, may the love and support of family and friends provide solace and strength.</p>
              </div>
                      <img src="./assets/img/slides/slide1.jpeg" alt="About Us" class="img-fluid rounded"></img>
            </div>
            <!-- Add more slides as needed -->
          </div>
          <button class="prev" id="neg-side"><i class="fas fa-chevron-left"></i></button>
          <button class="next" id="plus-side"><i class="fas fa-chevron-right"></i></button>
        </div>
      </section>
        `;
        
        // Dynamically load Font Awesome stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        this.shadowRoot.appendChild(link);
        
        let slideIndex = 1;
	let plusSlides = (n) => {
	  showSlides(slideIndex += n);
	}
        
        let nextButton = this.shadowRoot.getElementById("plus-side");
        nextButton.addEventListener("click", () => {
            plusSlides(1);
        });
        
        let prevButton = this.shadowRoot.getElementById("neg-side");
        prevButton.addEventListener("click", () => {
            plusSlides(-1);
        });
	
	let showSlides = (n) => {
        let i;
        let slides = this.shadowRoot.querySelectorAll(".mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }

        slides[slideIndex-1].style.display = "block";
      }
      
      showSlides(slideIndex);

      // Automatic slideshow
      let slideTimer = setInterval(function() {
        plusSlides(1);
      }, 6000); // Change image every 2 seconds

      // Pause slideshow on mouseover
      this.shadowRoot.querySelector('.slideshow-container').addEventListener('mouseover', function() {
        clearInterval(slideTimer);
      });

      // Resume slideshow on mouseout
      this.shadowRoot.querySelector('.slideshow-container').addEventListener('mouseout', function() {
        slideTimer = setInterval(function() {
          plusSlides(1);
        }, 6000); // Change image every 2 seconds
      });
      
      
    }
});