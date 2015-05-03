concepts:

Easing - Timing - Cushioning ( aceleration or deceleration in animation)

transition timing functions (http://cubic-bezier.com/, http://easings.net/es)

Run the examples using a local server like python -m SimpleHTTPServer

anatomy of the animation property


animation: black-to-white 1s linear 1s 1;

animation: keyframeblockname duration timingfunction (easing) delay iteration count(how many times)

keyframe reference:
   https://css-tricks.com/snippets/css/keyframe-animation-syntax/


audio stuff:


canplaythrough event waits until the music is loaded


the loop attribute on audio tags has gaps, each browser takes different time to restart the loops
check seamslessloop.js
