document.addEventListener('DOMContentLoaded', function() {
    const currentImage = document.getElementById('currentImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentIndexSpan = document.getElementById('currentIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.close-modal');

    let images = [];
    let currentIndex = 0;
    let videoElement = null;

    // Function to load images from the galleryimages folder
    async function loadImages() {
        try {
            // This is a placeholder. In a real setup, you would need to implement
            // server-side functionality to read the directory
            // For now, we'll use the exact same file array from your original code
            images = [
                'galleryimages/image.jpeg',
                'galleryimages/image2.jpeg',
                'galleryimages/image3.jpeg',
                'galleryimages/image4.jpeg',
                'galleryimages/image5.jpeg',
                'galleryimages/image6.jpeg',
                'galleryimages/image7.jpeg',
                'galleryimages/image8.jpeg',
                'galleryimages/image9.jpeg',
                'galleryimages/image10.jpeg',
                'galleryimages/image11.jpeg',
                'galleryimages/image12.jpeg',
                'galleryimages/image13.jpeg',
                'galleryimages/image14.jpeg',
                'galleryimages/image15.jpeg',
                'galleryimages/image16.jpeg',
                'galleryimages/image17.jpeg',
                'galleryimages/image18.jpeg',
                'galleryimages/image19.jpeg',
                'galleryimages/image20.jpeg',
                'galleryimages/image21.jpeg',
                'galleryimages/image22.jpeg',
                'galleryimages/image23.jpeg',
                'galleryimages/image24.jpeg',
                'galleryimages/image25.jpeg',
                'galleryimages/image26.jpeg',
                'galleryimages/image27.jpeg',
                'galleryimages/image28.jpeg',
                'galleryimages/image29.jpeg',
                'galleryimages/image30.jpeg',
                'galleryimages/image31.jpeg',
                'galleryimages/image32.jpeg',
                'galleryimages/image33.jpeg',
                'galleryimages/image34.jpeg',
                'galleryimages/image35.jpeg',
                'galleryimages/image36.jpeg',
                'galleryimages/image37.jpeg',
                'galleryimages/image38.jpeg',
                'galleryimages/image39.jpeg',
                'galleryimages/image40.jpeg',
                'galleryimages/image41.jpeg',
                'galleryimages/image42.jpeg',
                'galleryimages/image43.jpeg',
                'galleryimages/image44.jpeg',
                'galleryimages/image45.jpeg',
                'galleryimages/image46.jpeg',
                'galleryimages/image47.jpeg',
                'galleryimages/image48.jpeg',
                'galleryimages/image49.jpeg',
                'galleryimages/image50.jpeg',
                'galleryimages/vide0.mp4',
                'galleryimages/vide02.mp4',
                'galleryimages/vide03.mp4',
                'galleryimages/vide04.mp4',
                'galleryimages/vide05.mp4',
                'galleryimages/vide06.mp4',
                'galleryimages/video06.mp4',
                'galleryimages/video07.mp4',
                
            ];

            totalImagesSpan.textContent = images.length;
            if (images.length > 0) {
                showImage(0);
                createThumbnails();
            }
        } catch (error) {
            console.error('Error loading media files:', error);
        }
    }

    function isVideoFile(filename) {
        return filename.toLowerCase().endsWith('.mp4');
    }

    function showImage(index) {
        if (images.length === 0) return;
        
        const filePath = images[index];
        
        // Check if the file is a video or an image
        if (isVideoFile(filePath)) {
            // Remove existing video if present
            if (videoElement) {
                videoElement.remove();
            }
            
            // Hide the image element
            currentImage.style.display = 'none';
            
            // Create and insert video element
            videoElement = document.createElement('video');
            videoElement.src = filePath;
            videoElement.controls = true;
            videoElement.autoplay = false;
            videoElement.style.maxWidth = '100%';
            videoElement.style.maxHeight = '500px';
            videoElement.id = 'currentVideo';
            
            // Insert video element after the image element
            currentImage.parentNode.insertBefore(videoElement, currentImage.nextSibling);
        } else {
            // If there's a video element, remove it
            if (videoElement) {
                videoElement.remove();
                videoElement = null;
            }
            
            // Show and update the image element
            currentImage.style.display = 'block';
            currentImage.src = filePath;
        }
        
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
            
            if (isVideoFile(src)) {
                // Create video thumbnail
                thumbnailDiv.classList.add('video-thumbnail');
                const videoThumb = document.createElement('video');
                videoThumb.src = src;
                videoThumb.muted = true;
                videoThumb.setAttribute('playsinline', '');
                
                // Use the first frame as thumbnail
                videoThumb.addEventListener('loadeddata', function() {
                    videoThumb.currentTime = 0;
                });
                
                thumbnailDiv.appendChild(videoThumb);
            } else {
                // Create image thumbnail
                const imgThumb = document.createElement('img');
                imgThumb.src = src;
                imgThumb.alt = `Thumbnail ${index + 1}`;
                thumbnailDiv.appendChild(imgThumb);
            }
            
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
        
        if (isVideoFile(src)) {
            modalImage.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = src;
            modalVideo.currentTime = 0;
        } else {
            modalVideo.style.display = 'none';
            modalImage.style.display = 'block';
            modalImage.src = src;
        }
        
        modal.style.display = 'block';
    }

    // Close the modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideo.pause();
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause();
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
            modalVideo.pause();
        }
    });

    // Initialize the gallery
    loadImages();
});