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
                // new images first
                "galleryimages/image94.jpeg",
                "galleryimages/image95.jpeg",
                "galleryimages/image96.jpeg",
                "galleryimages/image97.jpeg",
                "galleryimages/image98.jpeg",
                "galleryimages/image99.jpeg",
                "galleryimages/image100.jpeg",
                "galleryimages/image101.jpeg",
                "galleryimages/image102.jpeg",
                "galleryimages/image103.jpeg",
                "galleryimages/image104.jpeg",
                "galleryimages/image105.jpeg",
                "galleryimages/image106.jpeg",
                "galleryimages/image107.jpeg",
                "galleryimages/image108.jpeg",
                "galleryimages/image109.jpeg",
                "galleryimages/image110.jpeg",
                "galleryimages/image111.jpeg",
                "galleryimages/image112.jpeg",
                "galleryimages/image113.jpeg",
                "galleryimages/image114.jpeg",
                "galleryimages/image115.jpeg",
                "galleryimages/image116.jpeg",
                "galleryimages/image117.jpeg",
                "galleryimages/image118.jpeg",
                "galleryimages/image119.jpeg",
                "galleryimages/image120.jpeg",
                "galleryimages/image121.jpeg",
                "galleryimages/image122.jpeg",
                "galleryimages/image123.jpeg",
                "galleryimages/image124.jpeg",
                "galleryimages/image125.jpeg",
                "galleryimages/image126.jpeg",
                "galleryimages/image127.jpeg",
                "galleryimages/image128.jpeg",
                "galleryimages/image129.jpeg",
                "galleryimages/image130.jpeg",
                "galleryimages/image131.jpeg",
                "galleryimages/image132.jpeg",
                "galleryimages/image133.jpeg",
                "galleryimages/image134.jpeg",
                "galleryimages/image135.jpeg",
                "galleryimages/image136.jpeg",
                "galleryimages/image137.jpeg",
                "galleryimages/image138.jpeg",
                "galleryimages/image139.jpeg",
                "galleryimages/image140.jpeg",
                "galleryimages/image141.jpeg",
                "galleryimages/image142.jpeg",
                "galleryimages/image143.jpeg",
                "galleryimages/image144.jpeg",
                "galleryimages/image145.jpeg",
                "galleryimages/image146.jpeg",
                "galleryimages/image147.jpeg",
                "galleryimages/image148.jpeg",
                "galleryimages/image149.jpeg",
                "galleryimages/image150.jpeg",
                "galleryimages/image151.jpeg",
                "galleryimages/image152.jpeg",
                "galleryimages/image153.jpeg",
                "galleryimages/image154.jpeg",
                "galleryimages/image155.jpeg",
                //new set here
                'galleryimages/image51.jpeg',
                'galleryimages/image52.jpeg',
                'galleryimages/image53.jpeg',
                'galleryimages/image54.jpeg',
                'galleryimages/image55.jpeg',
                'galleryimages/image56.jpeg',
                'galleryimages/image57.jpeg',
                'galleryimages/image58.jpeg',
                'galleryimages/image59.jpeg',
                'galleryimages/image60.jpeg',
                'galleryimages/image61.jpeg',
                'galleryimages/image62.jpeg',
                'galleryimages/image63.jpeg',
                'galleryimages/image64.jpeg',
                'galleryimages/image65.jpeg',
                'galleryimages/image66.jpeg',
                'galleryimages/image67.jpeg',
                'galleryimages/image68.jpeg',
                'galleryimages/image69.jpeg',
                'galleryimages/image70.jpeg',
                'galleryimages/image71.jpeg',
                'galleryimages/image72.jpeg',
                'galleryimages/image73.jpeg',
                'galleryimages/image74.jpeg',
                'galleryimages/image75.jpeg',
                'galleryimages/image76.jpeg',
                'galleryimages/image77.jpeg',
                'galleryimages/image78.jpeg',
                'galleryimages/image79.jpeg',
                'galleryimages/image80.jpeg',
                'galleryimages/image81.jpeg',
                'galleryimages/image82.jpeg',
                'galleryimages/image83.jpeg',
                'galleryimages/image84.jpeg',
                'galleryimages/image85.jpeg',
                'galleryimages/image86.jpeg',
                'galleryimages/image87.jpeg',
                'galleryimages/image88.jpeg',
                'galleryimages/image89.jpeg',
                'galleryimages/image90.jpeg',
                'galleryimages/image91.jpeg',
                'galleryimages/image92.jpeg',
                'galleryimages/image93.jpeg',
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
                'galleryimages/video08.mp4',
                
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
