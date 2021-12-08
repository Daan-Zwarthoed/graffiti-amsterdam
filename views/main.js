const graph = document.querySelector(".graph");
const body = document.querySelector("body");
const video = document.querySelector("video");
const backgroundColorDiv = document.querySelector(".backgroundColorDiv");
const source = document.querySelector("source");
const closeVideoButton = document.querySelector(".closeVideo");

function mouseoverGraph(event) {
  let targetElement = event.target;
  event.path.forEach((element) => {
    if (element.classList) {
      if (
        element.classList.contains("west") ||
        element.classList.contains("east")
      ) {
        targetElement = element;
      }
    }
  });
  grownElement = document.querySelector(".growen");
  if (grownElement && grownElement !== targetElement) {
    grownElement.classList.remove("growen");
    grownElement.parentElement.style.width =
      grownElement.parentElement.style.width.replace("vw", "") / 2 + "vw";
    grownElement.parentElement.children[1].style.width =
      grownElement.parentElement.style.width.replace("vw", "") * 0.95 + "vw";
    grownElement.style.width =
      grownElement.parentElement.style.width.replace("vw", "") * 0.95 + "vw";
  } else {
    const targetElementParent = targetElement.parentElement;
    if (
      (targetElement.classList.contains("east") ||
        targetElement.classList.contains("west")) &&
      !targetElement.classList.contains("growen")
    ) {
      targetElement.classList.add("growen");
      targetElementParent.style.width =
        targetElementParent.style.width.replace("vw", "") * 2 + "vw";
      targetElementParent.children[1].style.width =
        targetElementParent.style.width.replace("vw", "") * 0.95 + "vw";
      targetElement.style.width =
        targetElementParent.style.width.replace("vw", "") * 0.95 + "vw";
      targetElement.classList.add(targetElement.style.height);
    }
  }
}

function clickGraph(event) {
  if (!event.target.classList.contains("watchVideo")) return;
  backgroundColorDiv.classList.add("videoActive");
  source.src = `videos/${event.target.classList[1]}${
    event.target.parentElement.parentElement.classList[0]
      .charAt(0)
      .toUpperCase() +
    event.target.parentElement.parentElement.classList[0].slice(1)
  }.MOV`;
  video.load();
  video.play();
}

function closeVideo() {
  backgroundColorDiv.classList.remove("videoActive");
  video.pause();
}

graph.addEventListener("mouseover", mouseoverGraph);
graph.addEventListener("click", clickGraph);
closeVideoButton.addEventListener("click", closeVideo);
