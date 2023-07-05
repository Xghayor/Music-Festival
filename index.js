
// Mobile Menu


const hamburger = document.querySelector('.hamburger');
const materialIcon = hamburger.querySelector('.material-icons');
const menuOverlay = document.querySelector('.menu-overlay');
const close = document.querySelector(".close-icon")

materialIcon.addEventListener('click', function() {
  menuOverlay.style.display = 'block';
  close.style.display="block"
});


menuOverlay.addEventListener('click', function() {
  menuOverlay.style.display = 'none';
});


// Artist Cards

document.addEventListener('DOMContentLoaded', function() {
  const artists = [
    {
      image: "./img/artists/1.png",
      title: "Salman Ali",
      profession: "Indian Idol 10 Winner",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "./img/artists/2.png",
      title: "Rahat Fateh Ali Khan",
      profession: "Top Rated Singer",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "./img/artists/3.png",        
      title: "Alan Walker",
      profession: "Musician",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "./img/artists/4.png",        
      title: "Taylor Swift",
      profession: "Singer",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "./img/artists/5.png",        
      title: "David",
      profession: "Musician",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "./img/artists/6.png",        
      title: "Gippy Grewal",
      profession: "Singer",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
   
  ];

  let program = document.getElementById("partners")
  let footer = document.getElementById("footer")


  let gridContainer = document.getElementById("artists-grid");
  let heading = document.createElement("div");
  heading.innerText = "Featured Artists";
  heading.classList.add("artist-heading");

  let hr = document.createElement("hr");
  hr.classList.add("program-hr");

  gridContainer.parentNode.insertBefore(heading, gridContainer);
  gridContainer.parentNode.insertBefore(hr, gridContainer);

 
  function createCard(artist) {
    let card = document.createElement("div");
    card.classList.add("artist-card");

    let image = document.createElement("img");
    image.height = "120";
    image.src = artist.image;
    image.classList.add("float-left");
    card.appendChild(image);

    let title = document.createElement("h3");
    title.textContent = artist.title;
    card.appendChild(title);

    let profession = document.createElement("h5");
    profession.textContent = artist.profession;
    card.appendChild(profession);

    let hr = document.createElement("hr");
    hr.classList.add("artist-hr");
    card.appendChild(hr);

    let profile = document.createElement("p");
    profile.textContent = artist.profile;
    card.appendChild(profile);

    return card;
  }

  function displayArtists() {
    gridContainer.innerHTML = "";

    for (let i = 0; i < artists.length; i++) {
      let artist = artists[i];
      let card = createCard(artist);
      gridContainer.appendChild(card);
    }

    program.style.display="block"
    footer.style.display="block"
  }

  if (window.innerWidth <= 768) {
    let numVisibleArtists = 2;
  
    for (let i = 0; i < numVisibleArtists; i++) {
      let artist = artists[i];
      let card = createCard(artist);
      gridContainer.appendChild(card);
    }
  
    if (artists.length > 2) {
      let seeMoreButton = document.createElement("button");
      seeMoreButton.textContent = "MORE";
      seeMoreButton.classList.add("see-more-button");
      gridContainer.appendChild(seeMoreButton);
  
      let downArrow = document.createElement("i");
      downArrow.classList.add("fa", "fa-chevron-down");
      seeMoreButton.appendChild(downArrow);
  
      seeMoreButton.addEventListener("click", displayArtists);
    }
  } else {
    displayArtists();
  }
});

if (window.innerWidth <= 768){
  let image = document.getElementById("footer-img");
  image.src = "./img/festive.png";
}