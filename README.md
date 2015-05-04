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


canplaythrough event let us know when the media should be able to play from start to finish without pause at the current download rate


the loop attribute on audio tags has gaps, each browser takes different time to restart the loops
check seamslessloop.js
