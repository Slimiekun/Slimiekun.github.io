const quotes = [
  "Believe in yourself and all that you are.",
  "You are capable of amazing things.",
  "Start where you are. Use what you have. Do what you can.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
  "Difficult roads often lead to beautiful destinations.",
"You don’t have to be perfect to be worthy.",
  "Progress is progress, no matter how small.",
  "Stop doubting yourself. Work hard, and make it happen.",
  "Be kind to yourself. You’re doing better than you think.",
  "Every expert was once a beginner.",
  "Your potential is endless.",
  "Don’t let yesterday take up too much of today.",
  "Fall seven times and stand up eight.",
  "You’re not behind — you’re on your own timeline.",
  "Your voice matters. Your story matters. You matter.",
  "Doubt kills more dreams than failure ever will.",
  "Stop apologizing for being yourself.",
  "You deserve to take up space.",
  "Strive for progress, not perfection.",
  "No storm lasts forever.",
  "It always seems impossible until it’s done.",
  "Your value doesn’t decrease based on someone’s inability to see your worth.",
  "Small steps every day add up to big change.",
  "Don’t compare your Chapter 1 to someone else’s Chapter 20.",
  "You are enough, exactly as you are.",
  "Be proud of how far you’ve come.",
  "Turn your wounds into wisdom.",
  "Mistakes are proof that you’re trying.",
  "Never forget: you’ve survived 100% of your bad days so far.",
  "Self-criticism won’t push you forward — self-compassion will.",
  "Your best is good enough.",
  "Be a voice, not an echo.",
  "Keep showing up, even on hard days.",
  "You are stronger than your excuses.",
  "You are not defined by your failures.",
  "Don’t shrink yourself to make others comfortable.",
  "Keep going — your future self will thank you.",
  "Your dreams are valid.",
  "Act like what you do makes a difference. It does.",
  "You have something unique to offer this world.",
  "Nothing changes if nothing changes.",
  "Stop tearing yourself down for things you’re still learning.",
  "You don’t need permission to grow.",
  "Celebrate every little victory.",
  "The only limit to your impact is your imagination and commitment."
];


const quoteBox = document.getElementById('quotebox');
const motivateBtn = document.getElementById('motivatebtn');
const audio = document.getElementById('bgmusic');
const audioToggle = document.getElementById('audioToggle');

let isMusicPausedByUser = false;

// 🎯 Show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randomIndex];
}

// 🎵 Toggle music state
audioToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(err => console.log("Play error:", err));
    audioToggle.textContent = 'Pause Music';
    isMusicPausedByUser = false;
  } else {
    audio.pause();
    audioToggle.textContent = 'Play Music';
    isMusicPausedByUser = true;
  }
});

// 💡 Motivate button click
motivateBtn.addEventListener('click', () => {
  showRandomQuote();
  
  // Only auto-play if the user hasn't manually paused
  if (!isMusicPausedByUser && audio.paused) {
    audio.play().catch(err => console.log("Autoplay failed:", err));
  }
});
