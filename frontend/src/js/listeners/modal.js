  //Modal media displayers
  const modalImage = document.querySelector(".imageDisplayer");
  const modalAudio = document.querySelector(".audioDisplayer");
  const modalVideo = document.querySelector(".videoDisplayer");
  //const relativeSubDir = relativeDir + "/" + subText;

const openModal = function (nameFile, extension, absolutePath) {
    console.log(absolutePath);
    console.log(modalImage, modalAudio, modalVideo)

    switch(extension){

        case 'mp4':

            modalVideo.setAttribute("data-toggle", "modal");
            modalVideo.setAttribute("data-target", "#myModal");
            modalImage.style.display = "none";
            modalAudio.style.display = "none";
            modalVideo.style.display = "flex";
            modalVideo.src = `root${absolutePath}`;
            break;
        case 'mp3':
            modalAudio.setAttribute("data-toggle", "modal");
            modalAudio.setAttribute("data-target", "#myModal");
            modalImage.style.display = "none";
            modalAudio.style.display = "flex";
            modalVideo.style.display = "none";
            modalAudio.src = `root${absolutePath}`;
            break;
        }
        if (extension === ('jpg' || 'png' || 'gif')) {
            modalImage.setAttribute("data-toggle", "modal");
            modalImage.setAttribute("data-target", "#myModal");
            modalImage.style.display = "flex";
            modalAudio.style.display = "none";
            modalVideo.style.display = "none";
            modalImage.src = `root${absolutePath}`;
        }



}

export { openModal }