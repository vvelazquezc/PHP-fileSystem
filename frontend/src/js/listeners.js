// import { $wrapperRoot } from "./components/folder.js";
// import { getInfoFolder } from "../services/info.js"
// //requiring path and fs modules
// const $elements = document.getElementsByClassName("folders-root");

// const secondTreeRender = function () {
//     const secondTree = document.querySelectorAll(".folders-path")[1];
//     const relativeText = this.querySelector(".text").textContent;
//     const splitRelativeText = relativeText.split("");
//   //Modal media displayers
//     const modalImage = document.querySelector(".imageDisplayer");
//     const modalAudio = document.querySelector(".audioDisplayer");
//     const modalVideo = document.querySelector(".videoDisplayer");
//   //Modal media displayers END

//     //TODO: take the extension mediaTypeIdentifier = extension

//     // we define what the function does here
//     function addEventListenerByClass2(list) {
//         for (let i = 0; i < list.length; i++) {
//             list[i].addEventListener("click", thirdTreeRender);
//         }
//     }
//     const secondTreeItems = secondTree.children;
//     setTimeout(function () {
//       //se tiene que cambiar por un await Vero, no te molestes ;)
//         addEventListenerByClass2(secondTreeItems);
//     }, 300);
//     } else if (
//     mediaTypeIdentifier === "mp4" ||
//     mediaTypeIdentifier === "mp3" ||
//     mediaTypeIdentifier === "jpg" ||
//     mediaTypeIdentifier === "png" ||
//     mediaTypeIdentifier === "gif"
//     ) {
//     if (
//         mediaTypeIdentifier === "jpg" ||
//         mediaTypeIdentifier === "png" ||
//         mediaTypeIdentifier === "gif"
//     ) {
//       //here we will put the action of the modal
//         modalVideo.style.display = "none";
//         modalAudio.style.display = "none";
//         this.setAttribute("data-toggle", "modal");
//         this.setAttribute("data-target", "#myModal");
//         modalImage.style.display = "flex";
//         modalImage.innerHTML = "";
//         modalImage.src = relativeDir;
//     } else if (mediaTypeIdentifier === "mp4") {
//       //here we will put the action of the modal
//         this.setAttribute("data-toggle", "modal");
//         this.setAttribute("data-target", "#myModal");
//         modalImage.style.display = "none";
//         modalAudio.style.display = "none";
//         modalVideo.style.display = "flex";
//         modalVideo.src = relativeDir;
//     } else if (mediaTypeIdentifier === "mp3") {
//         this.setAttribute("data-toggle", "modal");
//         this.setAttribute("data-target", "#myModal");
//         modalImage.style.display = "none";
//         modalVideo.style.display = "none";
//         modalAudio.style.display = "flex";
//         modalAudio.src = relativeDir;
//     }
//     }
//   //Here we add the modals for the second three before opening the third
//     const thirdTreeRender = function () {
//         const subText = this.querySelector(".text").textContent;
//         const relativeSubDir = relativeDir + "/" + subText;
//         const modal = document.createElement("div");
//         modal.classList.add("modal");
//         const relativeText = this.querySelector(".text").textContent;
//         const splitRelativeText = relativeText.split("");
//         const fileFolderSeparator = splitRelativeText[splitRelativeText.length - 4];
//         const mediaTypeIdentifier =
//             splitRelativeText[splitRelativeText.length - 3] +
//             splitRelativeText[splitRelativeText.length - 2] +
//             splitRelativeText[splitRelativeText.length - 1];
//         if (
//             mediaTypeIdentifier === "mp4" ||
//             mediaTypeIdentifier === "mp3" ||
//             mediaTypeIdentifier === "jpg" ||
//             mediaTypeIdentifier === "png" ||
//             mediaTypeIdentifier === "gif"
//         ) {
//             if (
//             mediaTypeIdentifier === "jpg" ||
//             mediaTypeIdentifier === "png" ||
//             mediaTypeIdentifier === "gif"
//             ) {
//             this.setAttribute("data-toggle", "modal");
//             this.setAttribute("data-target", "#myModal");
//             modalImage.style.display = "flex";
//             modalAudio.style.display = "none";
//             modalVideo.style.display = "none";
//             modalImage.src = relativeSubDir;
//             } else if (mediaTypeIdentifier === "mp4") {
//             this.setAttribute("data-toggle", "modal");
//             this.setAttribute("data-target", "#myModal");
//             modalImage.style.display = "none";
//             modalAudio.style.display = "none";
//             modalVideo.style.display = "flex";
//             modalVideo.src = relativeSubDir;
//             } else if (mediaTypeIdentifier === "mp3") {
//             this.setAttribute("data-toggle", "modal");
//             this.setAttribute("data-target", "#myModal");
//             modalImage.style.display = "none";
//             modalVideo.style.display = "none";
//             modalAudio.style.display = "flex";
//             modalAudio.src = relativeSubDir;
//             }
//         }
//     };
// };

// function addEventListenerByClass(list) {
//     for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", secondTreeRender);
//     }
// }
// //Here we add the second function
// setTimeout(function () {
//   //se tiene que cambiar por un await Vero, no te molestes ;)
//     addEventListenerByClass($elements);
// }, 1100);
