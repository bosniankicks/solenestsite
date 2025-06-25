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
                "galleryimages/photoset1.jpeg",
            "galleryimages/photoset2.jpeg",
            "galleryimages/photoset3.jpeg",
            "galleryimages/photoset4.jpeg",
            "galleryimages/photoset5.jpeg",
            "galleryimages/photoset6.jpeg",
            "galleryimages/photoset7.jpeg",
            "galleryimages/photoset8.jpeg",
            "galleryimages/photoset9.jpeg",
            "galleryimages/photoset10.jpeg",
            "galleryimages/photoset11.jpeg",
            "galleryimages/photoset12.jpeg",
            "galleryimages/photoset13.jpeg",
            "galleryimages/photoset14.jpeg",
            "galleryimages/photoset15.jpeg",
            "galleryimages/photoset16.jpeg",
            "galleryimages/photoset17.jpeg",
            "galleryimages/photoset18.jpeg",
            "galleryimages/photoset19.jpeg",
            "galleryimages/photoset20.jpeg",
            "galleryimages/photoset21.jpeg",
            "galleryimages/photoset22.jpeg",
            "galleryimages/photoset23.jpeg",
            "galleryimages/photoset24.jpeg",
            "galleryimages/photoset25.jpeg",
            "galleryimages/photoset26.jpeg",
            "galleryimages/photoset27.jpeg",
            "galleryimages/photoset28.jpeg",
            "galleryimages/photoset29.jpeg",
            "galleryimages/photoset30.jpeg",
            "galleryimages/photoset31.jpeg",
            "galleryimages/photoset32.jpeg",
            "galleryimages/photoset33.jpeg",
            "galleryimages/photoset34.jpeg",
            "galleryimages/photoset35.jpeg",
            "galleryimages/photoset36.jpeg",
            "galleryimages/photoset37.jpeg",
            "galleryimages/photoset38.jpeg",
            "galleryimages/photoset39.jpeg",
            "galleryimages/photoset40.jpeg",
            "galleryimages/photoset41.jpeg",
            "galleryimages/photoset42.jpeg",
            "galleryimages/photoset43.jpeg",
            "galleryimages/photoset44.jpeg",
            "galleryimages/photoset45.jpeg",
            "galleryimages/photoset46.jpeg",
            "galleryimages/photoset47.jpeg",
            "galleryimages/photoset48.jpeg",
            "galleryimages/photoset49.jpeg",
            "galleryimages/photoset50.jpeg",
            "galleryimages/photoset51.jpeg",
            "galleryimages/photoset52.jpeg",
            "galleryimages/photoset53.jpeg",
            "galleryimages/photoset54.jpeg",
            "galleryimages/photoset55.jpeg",
            "galleryimages/photoset56.jpeg",
            "galleryimages/photoset57.jpeg",
            "galleryimages/photoset58.jpeg",
            "galleryimages/photoset59.jpeg",
            "galleryimages/photoset60.jpeg",
            "galleryimages/photoset61.jpeg",
            "galleryimages/photoset62.jpeg",
            "galleryimages/photoset63.jpeg",
            "galleryimages/photoset64.jpeg",
            "galleryimages/photoset65.jpeg",
            "galleryimages/photoset66.jpeg",
            "galleryimages/photoset67.jpeg",
            "galleryimages/photoset68.jpeg",
            "galleryimages/photoset69.jpeg",
            "galleryimages/photoset70.jpeg",
            "galleryimages/photoset71.jpeg",
            "galleryimages/photoset72.jpeg",
            "galleryimages/photoset73.jpeg",
            "galleryimages/photoset74.jpeg",
            "galleryimages/photoset75.jpeg",
            "galleryimages/photoset76.jpeg",
            "galleryimages/photoset77.jpeg",
            "galleryimages/photoset78.jpeg",
            "galleryimages/photoset79.jpeg",
            "galleryimages/photoset80.jpeg",
            "galleryimages/photoset81.jpeg",
            "galleryimages/photoset82.jpeg",
            "galleryimages/photoset83.jpeg",
            "galleryimages/photoset84.jpeg",
            "galleryimages/photoset85.jpeg",
            "galleryimages/photoset86.jpeg",
            "galleryimages/photoset87.jpeg",
            "galleryimages/photoset88.jpeg",
            "galleryimages/photoset89.jpeg",
            "galleryimages/photoset90.jpeg",
            "galleryimages/photoset91.jpeg",
            "galleryimages/photoset92.jpeg",
            "galleryimages/photoset93.jpeg",
            "galleryimages/photoset94.jpeg",
            "galleryimages/photoset95.jpeg",
            "galleryimages/photoset96.jpeg",
            "galleryimages/photoset97.jpeg",
            "galleryimages/photoset98.jpeg",
            "galleryimages/photoset99.jpeg",
            "galleryimages/photoset100.jpeg",
            "galleryimages/photoset101.jpeg",
            "galleryimages/photoset102.jpeg",
            "galleryimages/photoset103.jpeg",
            "galleryimages/photoset104.jpeg",
            "galleryimages/photoset105.jpeg",
            "galleryimages/photoset106.jpeg",
            "galleryimages/photoset107.jpeg",
            "galleryimages/photoset108.jpeg",
            "galleryimages/photoset109.jpeg",
            "galleryimages/photoset110.jpeg",
            "galleryimages/photoset111.jpeg",
            "galleryimages/photoset112.jpeg",
            "galleryimages/photoset113.jpeg",
            "galleryimages/photoset114.jpeg",
            "galleryimages/photoset115.jpeg",
            "galleryimages/photoset116.jpeg",
            "galleryimages/photoset117.jpeg",
            "galleryimages/photoset118.jpeg",
            "galleryimages/photoset119.jpeg",
            "galleryimages/photoset120.jpeg",
            "galleryimages/photoset121.jpeg",
            "galleryimages/photoset122.jpeg",
            "galleryimages/photoset123.jpeg",
            "galleryimages/photoset124.jpeg",
            "galleryimages/photoset125.jpeg",
            "galleryimages/photoset126.jpeg",
            "galleryimages/photoset127.jpeg",
            "galleryimages/photoset128.jpeg",
            "galleryimages/photoset129.jpeg",
            "galleryimages/photoset130.jpeg",
            "galleryimages/photoset131.jpeg",
            "galleryimages/photoset132.jpeg",
            "galleryimages/photoset133.jpeg",
            "galleryimages/photoset134.jpeg",
            "galleryimages/photoset135.jpeg",
            "galleryimages/photoset136.jpeg",
            "galleryimages/photoset137.jpeg",
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
                "galleryimages/videoset1.mp4",
                "galleryimages/videoset2.mp4",
                "galleryimages/videoset3.mp4",
                "galleryimages/videoset4.mp4",
                "galleryimages/videoset5.mp4",
                "galleryimages/videoset6.mp4",
                "galleryimages/videoset7.mp4",
                "galleryimages/videoset8.mp4",
                "galleryimages/videoset9.mp4",
                "galleryimages/videoset10.mp4",
                "galleryimages/videoset11.mp4",
                "galleryimages/videoset12.mp4",
                "galleryimages/videoset13.mp4",
                "galleryimages/videoset14.mp4",
                "galleryimages/videoset15.mp4",
                "galleryimages/videoset16.mp4",
                "galleryimages/videoset17.mp4",
                "galleryimages/videoset18.mp4",
                "galleryimages/videoset19.mp4",
                "galleryimages/videoset20.mp4",
                "galleryimages/videoset21.mp4",
                "galleryimages/videoset22.mp4",
                "galleryimages/videoset23.mp4",
                "galleryimages/videoset24.mp4",
                "galleryimages/videoset25.mp4",
                "galleryimages/videoset26.mp4",
                "galleryimages/videoset27.mp4",
                "galleryimages/videoset28.mp4",
                "galleryimages/videoset29.mp4",
                "galleryimages/videoset30.mp4",
                "galleryimages/videoset31.mp4",
                "galleryimages/videoset32.mp4",
                "galleryimages/videoset33.mp4",
                "galleryimages/videoset34.mp4",
                "galleryimages/videoset35.mp4",
                "galleryimages/videoset36.mp4",
                "galleryimages/videoset37.mp4",
                "galleryimages/videoset38.mp4",
                "galleryimages/videoset39.mp4",
                "galleryimages/videoset40.mp4",
                "galleryimages/videoset41.mp4",
                "galleryimages/videoset42.mp4",
                "galleryimages/videoset43.mp4",
                "galleryimages/videoset44.mp4",
                "galleryimages/videoset45.mp4",
                "galleryimages/videoset46.mp4",
                "galleryimages/videoset47.mp4",
                "galleryimages/videoset48.mp4",
                "galleryimages/videoset49.mp4",
                "galleryimages/videoset50.mp4",
                "galleryimages/videoset51.mp4"
                
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
