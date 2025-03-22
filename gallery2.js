document.addEventListener('DOMContentLoaded', function() {
    const currentImage = document.getElementById('currentImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentIndexSpan = document.getElementById('currentIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');

    let images = [];
    let currentIndex = 0;

    async function loadImages() {
        try {
    
            images = [
                'galleryimages/bg1.jpg',
                'galleryimages/bg2.jpg',
                'galleryimages/bg3.jpg',
                'galleryimages/bg4.jpg',
                'galleryimages/bg5.jpg',
                'galleryimages/bg6.jpg',
                'galleryimages/bg7.jpg',
                'galleryimages/bg8.jpg',
                'galleryimages/bg9.jpg',
                'galleryimages/bg10.jpg',
                'galleryimages/bg11.jpg',
                'galleryimages/bg12.jpg',
                'galleryimages/bg13.jpg',
                'galleryimages/bg14.jpg',
                'galleryimages/bg15.jpg',
                'galleryimages/bg16.jpg',
                'galleryimages/bg17.jpg',
                'galleryimages/bg18.jpg',
                'galleryimages/bg19.jpg',
                'galleryimages/bg20.jpg',
                'galleryimages/bg21.jpg',
                'galleryimages/bg22.jpg',
                'galleryimages/bg23.jpg',
                'galleryimages/bg24.jpg',
                'galleryimages/bg25.jpg',
                'galleryimages/bg26.jpg',
                'galleryimages/bg27.jpg',
                'galleryimages/bg28.jpg',
                'galleryimages/bg29.jpg',
            ];

            totalImagesSpan.textContent = images.length;
            if (images.length > 0) {
                showImage(0);
                createThumbnails();
            }
        } catch (error) {
            console.error('Error loading images:', error);
        }
    }

    function showImage(index) {
        if (images.length === 0) return;
        
        currentImage.src = images[index];
        currentIndexSpan.textContent = index + 1;
        
        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === images.length - 1;
    }

    function createThumbnails() {
        // Clear existing thumbnails
        thumbnailGrid.innerHTML = '';
        
        // Create a thumbnail for each image
        images.forEach((src, index) => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('thumbnail');
            
            // Create image thumbnail
            const imgThumb = document.createElement('img');
            imgThumb.src = src;
            imgThumb.alt = `Backdrop ${index + 1}`;
            thumbnailDiv.appendChild(imgThumb);
            
            // Add click handler to show the image in the main view
            thumbnailDiv.addEventListener('click', function() {
                currentIndex = index;
                showImage(index);
                
                // Also open the modal with the full image
                openModal(index);
            });
            
            thumbnailGrid.appendChild(thumbnailDiv);
        });
    }

    function openModal(index) {
        const src = images[index];
        modalImage.src = src;
        modal.style.display = 'block';
    }

    // Close the modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    // Initialize the gallery
    loadImages();
});