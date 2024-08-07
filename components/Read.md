* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif;
  }
  
  .container {
    display: flex;
    height: 100vh; 
    width: 100%;
  }
  
  .container.dark {
    background-color: #282D35;
    color: white;
  }
  
  button:focus {
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: white;
    display: inline;
  }
  
  /* Sidebar Styles */
  
  nav {
    padding: 10px;
    height: 100%;
    width: 16%;
    box-shadow: 0px 1px 4px white;
    z-index: 999;
    flex-shrink: 0; 
    box-sizing: border-box;
  
  }

  .dark h1{
    font-family: 'Cyberpunk Is Not Dead', sans-serif;
  }
  
  .navbar {
    display: flex;
    flex-direction: column;
    gap: 20px; 
  }
  
  .navbar a {
    display: flex;
    align-items: center;
    text-decoration: none; 
    color: inherit;
  }
  
  .navbar a img {
    width: 20px;
    margin-right: 10px; 
  }
  
  .navbar a p {
    margin: 0; 
  }
  
  .navbar input {
    display: block;
    padding: 5px;
    border: 1px solid #555;
    border-radius: 3px;
    background-color: #181818;
    color: #fff;
  }
  
  nav.dark {
    background-color: black;
    color: white;
    border-right: 1px solid whitesmoke;
  }
  
  .ml--logo {
    width: 80px;
  }

  .dropcommunity-toggle{
    display: flex;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .dropcommunity-toggle img{
    margin-right: 10px;
    
  }

  .dropcommunity-menu{
    transition: max-height 2s ease-out, opacity 2s ease-out;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding-left: 2.1rem;
  }
  

  
  /* Hub Styles */
  
  .hub {
    flex: 1; 
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 100%;
    background-color: black; 
    padding: 10px;
    color: #F5F5F5;
    overflow-y: auto;
    box-sizing: border-box;
  }
  
  .hub.dark {
    background-color: black; 
    color: #F5F5F5;
  }
  
  .drops-downs {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
    
  }
  
  .drops-downs img{
    width: 40px;
  }
  
  .drops-downs > * {
    margin-left: 10px; 
    cursor: pointer;
  }
  
  .drops-downs > *:first-child {
    margin-left: 0; /* Remove margin for the first child */
  }
  
  .drops-downs > * {
    padding: 5px;
    background-color: black;
  }
  
  
  .hub-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 2px solid transparent;
    cursor: pointer;
    transition: transform 0.3s, border 0.3s; /* Smooth hover effect for border and scale */
    border-radius: 10px; 
  }
  
  .hub.dark .hub-image {
    border: 2px solid #ffffff; 
  }

  .hub-image:hover {
    transform: scale(1.05); /* Slightly enlarges the image on hover */
    border-color: #f5f5f5; /* Changes border color on hover */
}

  .hub-description {
    width: 100%;
    text-align: start;
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #d3d3d3; /* Slightly lighter color for the description */
}
  
  h2 {
    display: flex;
    justify-content: center; /* Centers the heading */
    width: 100%;
    margin: 20px 0;
    font-size: 1.5rem; /* Larger font size for the heading */
    border-bottom: 1px solid #f5f5f5; /* Underline for the heading */
    padding-bottom: 10px; /* Adds padding below the heading */
  }
  
/* window styles */
  .main-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #181818;
    color: white;
    padding: 20px;
    box-shadow: 0px 1px 4px white;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .close-button {
    align-self: flex-end;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: -10px;
    border-radius: 6px;
  }
  
  .window {
    background-color: #181818;
    color: white;
    padding: 20px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .nft-block {
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
  
  .window--img {
    width: 50%;
    margin-right: 1rem;
  }
  
  .nft--info {
    width: 50%;
  }
  
  .traits-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 0.5rem;
  }
  
  .traits-container span {
    padding-left: 4px;
    background-color: black;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    width: 45%;
  }
  
  .download-block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .download-container {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .download-container span {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
    background-color: black;
    margin: 4px;
  }
  
  
  .download-block img {
    width: 20px;
    margin-left: 3px;
  }
  
  
  .links-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .opensea-link, .model-preview {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .opensea-link img, .model-preview img {
    width: 20px;
    margin-right: 10px;
  }
  
  
  .nft--index{
    margin-bottom: 0.5rem;
  }
  
  .traits{
    margin-bottom: 0.5rem;
  }
  
  .nekito, .traits, .name-of-traits, .downloads{
    color: gray;
  }
  
  
  @media (max-width: 768px) {
    .drops-downs {  
        flex-wrap: wrap; 
        justify-content: center;
    }
  
    .drops-downs img {
        width: 30px; 
    }
  
    .drops-downs > * {
        
        margin: 5px; 
        padding: 5px;
    }
  
    .drops-downs > *:last-child {
        margin-bottom: 0; 
    }
  
    .download-block {
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        width: 100%;
    }
  
    .download-container {
        width: 100%;
        grid-template-columns: 1fr; 
        gap: 10px;
    }
  
    .links-container {
        position: relative;
        width: 100%;
        bottom: auto;
        right: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px; 
    }
  }

  .glitch {
    font-size: 1.5rem;
    color: #fff;
    animation: glitch 0.5s linear infinite;
  }
  
  @keyframes glitch {
    0%, 100% {
      text-shadow: -2.5px -2.5px 0 #6b0b7c, 
              2.5px 2.5px 0 rgb(0, 255, 255);
    }
    25% {
      text-shadow: 2.5px 2.5px 0 #470970, 
              -2.5px -2.5px 0 rgb(0, 255, 255);
    }
    50% {
      text-shadow: 2.5px -2.5px 0 #4b0981, 
              -2.5px 2.5px 0 rgb(0, 255, 255);
    }
    75% {
      text-shadow: 2.5px 2.5px 0 #ffee00, 
              2.5px -2.5px 0 rgb(0, 255, 255);
    }
  }

  
  
  
  