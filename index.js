// Mobile Menu

const hamburger = document.querySelector('.hamburger');
const materialIcon = hamburger.querySelector('.material-icons');
const menuOverlay = document.querySelector('.menu-overlay');
const close = document.querySelector('.close-icon');

materialIcon.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
  close.style.display = 'block';
});

menuOverlay.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
});

// Artist Cards

document.addEventListener('DOMContentLoaded', () => {
  const artists = [
    {
      image: './img/artists/1.png',
      title: 'Salman Ali',
      profession: 'Indian Idol 10 Winner',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: './img/artists/2.png',
      title: 'Rahat Fateh Ali Khan',
      profession: 'Top Rated Singer',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: './img/artists/3.png',
      title: 'Alan Walker',
      profession: 'Musician',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: './img/artists/4.png',
      title: 'Taylor Swift',
      profession: 'Singer',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: './img/artists/5.png',
      title: 'David',
      profession: 'Musician',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: './img/artists/6.png',
      title: 'Gippy Grewal',
      profession: 'Singer',
      profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

  ];

  const program = document.getElementById('partners');
  const footer = document.getElementById('footer');

  const gridContainer = document.getElementById('artists-grid');
  const heading = document.createElement('div');
  heading.innerText = 'Featured Artists';
  heading.classList.add('artist-heading');

  const hr = document.createElement('hr');
  hr.classList.add('program-hr');

  gridContainer.parentNode.insertBefore(heading, gridContainer);
  gridContainer.parentNode.insertBefore(hr, gridContainer);

  function createCard(artist) {
    const card = document.createElement('div');
    card.classList.add('artist-card');

    const image = document.createElement('img');
    image.height = '120';
    image.src = artist.image;
    image.classList.add('float-left');
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = artist.title;
    card.appendChild(title);

    const profession = document.createElement('h5');
    profession.textContent = artist.profession;
    card.appendChild(profession);

    const hr = document.createElement('hr');
    hr.classList.add('artist-hr');
    card.appendChild(hr);

    const profile = document.createElement('p');
    profile.textContent = artist.profile;
    card.appendChild(profile);

    return card;
  }

  function displayArtists() {
    gridContainer.innerHTML = '';

    for (let i = 0; i < artists.length; i += 1) {
      const artist = artists[i];
      const card = createCard(artist);
      gridContainer.appendChild(card);
    }

    program.style.display = 'block';
    footer.style.display = 'block';
  }

  if (window.innerWidth <= 768) {
    const numVisibleArtists = 2;

    for (let i = 0; i < numVisibleArtists; i += 1) {
      const artist = artists[i];
      const card = createCard(artist);
      gridContainer.appendChild(card);
    }

    if (artists.length > 2) {
      const seeMoreButton = document.createElement('button');
      seeMoreButton.textContent = 'MORE';
      seeMoreButton.classList.add('see-more-button');
      gridContainer.appendChild(seeMoreButton);

      const downArrow = document.createElement('i');
      downArrow.classList.add('fa', 'fa-chevron-down');
      seeMoreButton.appendChild(downArrow);

      seeMoreButton.addEventListener('click', displayArtists);
    }
  } else {
    displayArtists();
  }
});

if (window.innerWidth <= 768) {
  const image = document.getElementById('footer-img');
  image.src = './img/festive.png';
}