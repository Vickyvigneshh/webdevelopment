/* || General setup 

Author : mdn web docs
date : 2 August 2024
base main js provided by mdn web docs edited by vignesh babu


*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imagesname = 

['pic1.jpg',
`pic2.jpg`,
`pic3.jpg`,
`pic4.jpg`,
`pic5.jpg`];

const alt = 

{
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
  
}

/* Looping through images */

for (const image of imagesname) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alt[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener

('click',e =>
 
{

displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;
  
});

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
if (btn.classList.contains('dark')) {
btn.classList.replace('dark', 'light');
btn.textContent = 'Lighten';
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

else {
      btn.classList.replace('light', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  