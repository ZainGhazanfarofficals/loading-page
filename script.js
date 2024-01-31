const { TimelineMax, TweenMax } = window;
const heart = document.querySelector('.heart');
const eye = document.querySelector('.eye');
const straight = document.querySelector('.eye__piece--straight');
const curved = document.querySelector('.eye__piece--curved');
const mouth = document.querySelector('.mouth');
const cloak = document.querySelector('.cloak');

const timeline = new TimelineMax({ delay: 1, repeat: -1, repeatDelay: 1 });
// document.addEventListener('DOMContentLoaded', () => {
//     const eyeImage = document.querySelector('.eye img');

//     gsap.to(eyeImage, {
//         duration: 4, // Duration of one rotation cycle in seconds
//         rotation: 360, // Rotate by 360 degrees
//         repeat: -1, // Repeat the animation indefinitely
//         ease: "linear", // Use a linear easing for a smooth, continuous rotation
//         transformOrigin: "center center" // Ensure the rotation is around the center of the image
//     });
// });



const beat = delay =>
  new TimelineMax({ delay })
    .to(heart, 0.1, { scale: 0.85 })
    .to(heart, 0.1, { scale: 0.95 })
    .to(heart, 0.1, { scale: 0.85 })
    .to(heart, 0.1, { scale: 1 });

    const rotate = () =>
    new TimelineMax()
      .to(eye, 0.4, { rotation: 0, transformOrigin: "center center" })
  


timeline
  .add(TweenMax.from(heart, 0.15, { scale: 0 }))
  .add(beat(), 1.2)
  .add(beat(0.25))
  .add(beat(0), 3.6)
  .add(TweenMax.from(straight, 0.3, { x: -window.innerWidth, y: -window.innerWidth }), 0.9)
  .add(TweenMax.from(curved, 0.3, { x: window.innerWidth, y: -window.innerWidth }), 1.1)
  .add(rotate(), 0)
  .add(TweenMax.from(mouth, 0.3, { scaleX: 1, x: -window.innerWidth }), 2.75)
  .add(TweenMax.to(mouth, 0.25, { scaleX: 1 }, 3.4))
  .add(TweenMax.to(mouth, 0.25, { height: window.innerHeight }))
  .add(TweenMax.to(cloak, 0.5, { y: '-50%' }), 10);

//   function startAudio() {
//     var audio = document.getElementById('backgroundAudio');
//     if (audio.paused) {
//         audio.play();
//     }
//     else if(!audio.paused){
//         audio.pause();
//     }
//     // Remove the event listener after the first play
//     // document.body.removeEventListener('click', startAudio);
// }

// // Add event listener for the first user interaction
// document.body.addEventListener('click', startAudio);

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundAudio');

    // Attempt to play audio
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // Autoplay started successfully
            console.log("Audio is playing");
        }).catch(function(error) {
            // Autoplay was prevented.
            console.log("Autoplay was prevented. Showing fallback UI.");
            // Show a UI element to let the user manually start playback
            // Example: A play button that calls audio.play() when clicked
        });
    }
});

