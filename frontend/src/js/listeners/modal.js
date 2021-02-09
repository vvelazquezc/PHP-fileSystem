  //Modal media displayers
  const modalImage = document.querySelector(".imageDisplayer");
  const modalAudio = document.querySelector(".audioDisplayer");
  const modalVideo = document.querySelector(".videoDisplayer");
  //const relativeSubDir = relativeDir + "/" + subText;

const openModal =  (nameFile, extension, absolutePath, element) => {

    switch(extension){
        case 'mp4':
            element.setAttribute("data-toggle", "modal");
            element.setAttribute("data-target", "#myModal");
            modalImage.style.display = "none";
            modalAudio.style.display = "none";
            modalVideo.style.display = "flex";
            modalVideo.src = `root${absolutePath}`;
            break;
        case 'mp3':
            element.setAttribute("data-toggle", "modal");
            element.setAttribute("data-target", "#myModal");
            modalImage.style.display = "none";
            modalAudio.style.display = "flex";
            modalVideo.style.display = "none";
            modalAudio.src = `root${absolutePath}`;

            break;
        }
        if (extension === ('jpg' || 'png' || 'gif')) {
            element.setAttribute("data-toggle", "modal");
            element.setAttribute("data-target", "#myModal");
            modalImage.style.display = "flex";
            modalAudio.style.display = "none";
            modalVideo.style.display = "none";
            modalImage.src = `root${absolutePath}`;
        }
}

export { openModal }