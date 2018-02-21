'use strict';

(function() {

  var i = 0;
  var txt = 'This message and color was brought to you by minified JS'; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */

  document.getElementById('message').style.color = '#FF0000';
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("message").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
  
})();
