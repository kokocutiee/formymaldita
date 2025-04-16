// Fade-in page transition on load
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

document.getElementById("heart").addEventListener("click", function () {
  // Show the paper
  document.body.classList.add("paper-reveal");

  // Play sound
  const sound = new Audio("pop.mp3");
  sound.play();

  // Delay Cinnamoroll animation
  setTimeout(() => {
    const cinnamoroll = document.querySelector(".cinnamoroll");
    cinnamoroll.classList.add("animate");

    // Remove animation class so it can animate again later
    setTimeout(() => {
      cinnamoroll.classList.remove("animate");
    }, 2000);
  }, 500);

  // Generate floating hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDelay = Math.random() * 2 + "s";

    document.getElementById("hearts-container").appendChild(heart);

    // Mas dreamy kung matagal mawala
    setTimeout(() => {
      heart.remove();
    }, 8000);
  }
});

// SPARKLE EFFECTS 🌟
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDuration = 3 + Math.random() * 2 + "s";
  sparkle.style.opacity = Math.random();

  document.getElementById("sparkle-container").appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

// Make sparkles appear continuously every 300ms ✨
setInterval(createSparkle, 300);

// Glow and play sound when hovering Cinnamoroll 💫
document.querySelector(".cinnamoroll").addEventListener("mouseenter", () => {
  const hoverSound = new Audio("hover.mp3"); // make sure hover.mp3 exists
  hoverSound.play();
});
// 🌈 Cinnamoroll trail sparkle kapag click
document.addEventListener("mousemove", function (e) {
  const trail = document.createElement("div");
  trail.className = "sparkle";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);
  setTimeout(() => {
    trail.remove();
  }, 500);
});

// ⬇️ SCROLL HINT bounce arrow sa baba
const scrollHint = document.createElement("div");
scrollHint.innerHTML = "⬇️";
scrollHint.className = "scroll-hint";
document.body.appendChild(scrollHint);
