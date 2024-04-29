/*
 *@Author Le-Roy 
 */
customElements.define("casket-component", class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
        .row{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 80%;
            margin: 50px auto;
            justify-content: center;
            align-items: center;
            gap: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            padding: 10px;
            box-sizing: border-box;
        }

        .row > .column {
          flex: 1
        }

        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        .gallery-header
        {
            width: 100%;
            text-align: center;
            background-color: gray;
            padding: 10px 0;
            color: skyblue;
            font-weight: bolder;
        }

        /* Create four equal columns that floats next to eachother */
        .column {
          padding: 0;
          width: 25%;
        }

        .img-prop{
            width: 100%;
        }

        .th-nails{
            display: flex;
            flex-direction: row;
            flexwrap: nowrap;
            width: 100%;
            overflow-x: auto;
        }

        .column-thumbnails{
          flex-shrink: 0;
          flex-basis: 30%;
        }

        .column-thumbnails > img{
            width: 80%;
        }

        /* The Modal (background) */
        .modal {
          display: none;
          position: fixed;
          z-index: 10;
          padding-top: 10px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: black;
        }

        /* Modal Content */
        .modal-content {
          position: relative;
          background-color: #fefefe;
          margin: auto;
          padding: 0;
          width: 90%;
          max-width: 1200px;
        }

        /* The Close Button */
        .close {
          color: white;
          position: absolute;
          top: 10px;
          right: 25px;
          font-size: 35px;
          font-weight: bold;
        }

        .close:hover,
        .close:focus {
          color: #999;
          text-decoration: none;
          cursor: pointer;
        }

        /* Hide the slides by default */
        .mySlides {
          display: none;
        }

        /* Next & previous buttons */
        .prev,
        .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          padding: 16px;
          margin-top: -50px;
          color: white;
          font-weight: bold;
          font-size: 20px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
          -webkit-user-select: none;
        }

        /* Position the "next button" to the right */
        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }

        /* On hover, add a black background color with a little bit see-through */
        .prev:hover,
        .next:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        /* Number text (1/3 etc) */
        .numbertext {
          color: gray;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }

        /* Caption text */
        .caption-container {
          text-align: center;
          background-color: black;
          padding: 2px 16px;
          color: white;
        }

        img.demo {
          opacity: 0.6;
        }

        .active,
        .demo:hover {
          opacity: 1;
        }

        img.hover-shadow {
          transition: 0.3s;
        }

        .hover-shadow:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
     </style>
        
        <div class="row">
            <h2 class="gallery-header">Caskets</h2>
          <div class="column">
            <img id="1" class="img-prop hover-shadow" src="./assets/img/gallery/caskets/icons/casket1-icon.jpeg">
          </div>
          <div class="column">
            <img id="2" class="img-prop hover-shadow" src="./assets/img/gallery/caskets/icons/casket2-icon.jpeg">
          </div>
          <div class="column">
            <img id="3" class="img-prop hover-shadow" src="./assets/img/gallery/caskets/icons/casket3-icon.jpeg">
          </div>
          <div class="column">
            <img id="4" class="img-prop hover-shadow" src="./assets/img/gallery/caskets/icons/casket4-icon.jpeg">
          </div>
          <div class="column">
            <img id="5" class="img-prop hover-shadow" src="./assets/img/gallery/caskets/icons/casket5-icon.jpeg">
          </div>
        </div>
        
        <!-- The Modal/Lightbox -->
        <div id="myModal" class="modal">
            <!-- Next/previous controls -->
            <a class="prev" id="prev">&#10094;</a>
            <a class="next" id="next">&#10095;</a>

          <span id="close" class="close cursor">&times;</span>
          <div class="modal-content">

            <div class="mySlides">
              <div class="numbertext">1 / 5</div>
              <img src="./assets/img/gallery/caskets/casket1.jpeg" style="width:100%">
            </div>

            <div class="mySlides">
              <div class="numbertext">2 / 5</div>
              <img src="./assets/img/gallery/caskets/casket2.jpeg" style="width:100%">
            </div>

            <div class="mySlides">
              <div class="numbertext">3 / 5</div>
              <img src="./assets/img/gallery/caskets/casket3.jpeg" style="width:100%">
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 5</div>
              <img src="./assets/img/gallery/caskets/casket4.jpeg" style="width:100%">
            </div>

            <div class="mySlides">
              <div class="numbertext">5 / 5</div>
              <img src="./assets/img/gallery/caskets/casket5.jpeg" style="width:100%">
            </div>

            <!-- Caption text -->
            <div class="caption-container">
              <p id="caption"></p>
            </div>

            <!-- Thumbnail image controls -->
            <div class="th-nails">
                <div class="column-thumbnails">
                  <img class="demo" src="./assets/img/gallery/caskets/icons/casket1-icon.jpeg" id="1">
                </div>

                <div class="column-thumbnails">
                  <img class="demo" src="./assets/img/gallery/caskets/icons/casket2-icon.jpeg" id="2">
                </div>

                <div class="column-thumbnails">
                  <img class="demo" src="./assets/img/gallery/caskets/icons/casket3-icon.jpeg" id="3">
                </div>

                <div class="column-thumbnails">
                  <img class="demo" src="./assets/img/gallery/caskets/icons/casket4-icon.jpeg" id="4">
                </div>

                <div class="column-thumbnails">
                  <img class="demo" src="./assets/img/gallery/caskets/icons/casket5-icon.jpeg" id="5">
                </div>
            </div>
          </div>
        </div> 
        `;
        
        // Open the Modal
        let openModal = () => {
          this.shadowRoot.getElementById("myModal").style.display = "block";
        }
        // Close the Modal
        let closeModal = () => {
          this.shadowRoot.getElementById("myModal").style.display = "none";
        }
        
        let closeButton = this.shadowRoot.getElementById("close"); 
        closeButton.addEventListener("click", () => {
            closeModal();
        })

        let showSlides = (n) => {
          var i;
          let slides = this.shadowRoot.querySelectorAll(".mySlides");
          let dots = this.shadowRoot.querySelectorAll(".demo");
          let captionText = this.shadowRoot.getElementById("caption");
          
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          slides.forEach((slide) => {
            slide.style.display = "none";
          })
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }
        
        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        let plusSlides = (n)  => {
          let num = parseInt(n);
          showSlides(slideIndex += num);
        }
        
        let prevButton = this.shadowRoot.getElementById("prev"); 
        prevButton.addEventListener("click", () => {
            plusSlides(-1);
        })
        
        let nextButton = this.shadowRoot.getElementById("next"); 
        nextButton.addEventListener("click", () => {
            plusSlides(+1);
        })

        // Thumbnail image controls
        let currentSlide = (n) => {
          let num = parseInt(n);
          showSlides(slideIndex = num);
        }
        
        let imgHandle = this.shadowRoot.querySelectorAll(".img-prop");
        imgHandle.forEach((imageHandle) => {
            imageHandle.addEventListener("click", () => {
                let n = imageHandle.id;
                openModal();
                currentSlide(n);
            })
        });
        
        let dmHandle = this.shadowRoot.querySelectorAll(".demo");
        dmHandle.forEach((demoHandle) => {
            demoHandle.addEventListener("click", () => {
                let n = demoHandle.id;
                currentSlide(n);
            })
        });
    }
});