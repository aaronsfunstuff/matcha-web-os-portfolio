setInterval(function () {
    document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
  }, 1000);

dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
    element.style.display = "none"
  }
function openWindow(element) {
    element.style.display = "flex"
  }
  var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")
welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
  });
  
  welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
  });
var selectedIcon = undefined
function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element
  } 
function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element
  } 
function handleIconTap(element) {
    if (element.classList.contains("selected")) {
      deselectIcon(element)
      openWindow(window)
    } else {
      selectIcon(element)
    }
  }
  dragElement(document.querySelector("#matcha-notes"))
var notesScreen = document.querySelector("#matcha-notes")
var notesScreenOpen = document.querySelector("#matcha-notes-open")
var notesScreenClose = document.querySelector("#matcha-notesclose")

notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));
notesScreenOpen.addEventListener("click", () => openWindow(notesScreen));

var biggestIndex = 1;
var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}
var content =[
    {
        title:"Introduction🍵",
        content: `
        <div class="overflow">
        <p>🍵 Discover the Magic of Matcha</p>
        <img src="https://i.pinimg.com/736x/64/61/4f/64614f06c002d2d839b3fb5b44b07fef.jpg"
                style="width: 96px; border-radius: 16px" />
        <p>It has a vibrant color and a rich, tasty flavor. 🇯🇵</p>
        <p>Matcha is not only delicious but also healthy! 💚</p>
        <p>It’s full of antioxidants, vitamins, and minerals. It gives you energy, helps you focus, and promotes relaxation. ☕✨</p>
        <p>Enjoy matcha as a tea, latte, or in your favorite recipes. 🌿</p>
        <p>Join us to explore the wonderful world of matcha! 🍵💖</p>
      </div>
      `
    }
]