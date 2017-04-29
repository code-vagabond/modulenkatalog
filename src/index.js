// var tabsFn = (function() {
  
//   function init() {
//     setHeight();
//   }
  
//   function setHeight() {
//     var $tabPane = $('.tab-pane'),
//         tabsHeight = $('.nav-tabs').height();
    
//     $tabPane.css({
//       height: tabsHeight
//     });
//   }
    
//   $(init);
// })();

function testIt(){
  var $checkedRadio=$("input[type='radio']:checked");
  $("#test-output-name").text($checkedRadio.attr("name"));
  $("#test-output-value").text($checkedRadio.val());  
}

//test on radio change
$("body").on("change","input",function(e){
  testIt();
});

//test on load
testIt();


//$("ul li").click(function(e) {
$("li.li-semester-indicator, li.slider").click (function(e) {
  // make sure we cannot click the slider
  if ($(this).hasClass('slider')) {
    return;
  }

  /* Add the slider movement */

  // what tab was pressed
  var whatTab = $(this).index();

  // Work out how far the slider needs to go
  var howFar = 160 * whatTab;

  $(".slider").css({
    left: howFar + "px"
  });

  /* Add the ripple */

  // Remove olds ones
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.reacttest'));

