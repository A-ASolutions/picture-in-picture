const videoElement = document.getElementById('video');
const button = document.getElementById('button');



// Prompt to select media stream,pass to video element
async function selectMediaStream() {
    try {
        const mediaStreatm = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStreatm;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        // catch error here
    }
}
button.addEventListener('click', async() => {
    //disable the button

    button.disabled = true;

    // Start picture in picture

    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

//
selectMediaStream();