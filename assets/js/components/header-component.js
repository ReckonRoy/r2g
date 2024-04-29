/*
 *@Author Le-Roy 
 */
customElements.define("header-component", class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                /* Reset styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    color: #333;
                }

                header {
                    background-color: #333;
                    color: #fff;
                    padding: 20px 0;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                }

                .logo {
                    display: flex;
                    align-items: center;
                }

                .logo img {
                    width: 50px; /* Adjust the width of your logo */
                    margin-right: 10px;
                }

                .logo span {
                    font-weight: bold;
                    font-size: 20px;
                }

                .nav-links {
                    list-style-type: none;
                    display: flex;
                    align-items: center;
                }

                .nav-links li {
                    margin-right: 20px;
                }

                .nav-links li:last-child {
                    margin-right: 0;
                }

                .nav-links a {
                    text-decoration: none;
                    color: #fff;
                    font-size: 18px;
                    transition: color 0.3s ease;
                }

                .nav-links a:hover {
                    color: #ff9900;
                }
        
                /*styles for info wrapper*/
                #info-wrapper{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 18px;
                    gap: 20px;
                }
        
                #operating-infor > h2{
                    font-size: 18px;
                }
        
                #l-c{
                    display: flex;
                    gap: 2em;
                    align-items: center;
                }
        
                #l-c > img{
                    width: 350px;
                    height: 150px;
                }
                
                #contacts-ul{
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                }
        
                #contacts-ul > li{
                    background-color: green;
                    color: white;
                    font-weight: bolder;
                    border-radius: 5px;
                    padding: 3px;
                    box-sizing: border-box;
                }
        
                ul{
                    list-style-type: none;
                    
                }
        
                li{
                    line-height: 30px;
                }
        
                #sunday{
                    color: red;
                }
        
                @media screen and (min-width: 768px) {
                    #info-wrapper{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    font-size: 18px;
                    }
        
                    #l-c > img{
                    width: 200px;
                    height: 150px;
                    }
                }
            </style>
            <div id="info-wrapper">
                <div id="l-c">
                    <img src="./assets/img/logo/logo.jpeg" alt="R2G FUNERALS Logo">
                    <div id="contacts">
                        <ul id="contacts-ul">
                            <li>Landline: 011 057 9929</li>
                            <li>Watsapp: +27 63 261 2494</li>
                        </ul>
                    </div>
                </div>
                <div id="operating-infor">
                    <h2>Operating Hours</h2>
                    <ul>
                        <li>Monday-Friday: <strong>8AM - 5PM</strong></li>
                        <li>Saturday: <strong>8AM - 2:30PM</strong></li>
                        <li>Sunday: <strong id="sunday">Closed</strong></li>
                    <ul>
                </div>
            </div>
            <header>
            <nav>
            <div class="logo">
              <span>R2G FUNERALS</span>
            </div>
            <ul class="nav-links">
              <li><a href="./index.html">Home</a></li>
              <li><a href="./aboutus.html">About Us</a></li>
              <li><a href="./gallery.html">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          </header>
        `;
    }
});