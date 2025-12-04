document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.card-link, .topnav a'); 
    const contentToFade = document.querySelector('.wrapper'); 
    const transitionDuration = 300; 

    if (contentToFade) {
        
        
        contentToFade.classList.remove('initial-hidden'); 
        
        contentToFade.classList.add('fade-in'); 
        

        setTimeout(() => {
            contentToFade.classList.remove('fade-in');
        }, transitionDuration);


        links.forEach(link => {
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    
    const lightbox = document.getElementById('image-lightbox');
    const enlargedImage = document.getElementById('enlarged-image');
    
    const galleryImages = document.querySelectorAll('.img, .sub-img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            enlargedImage.src = image.src;
            
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target.closest('.lightbox-content') !== lightbox.querySelector('.lightbox-content')) {
            lightbox.classList.remove('active');
        }
    });
});