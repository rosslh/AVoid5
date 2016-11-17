// ==UserScript==
// @name        aVoid5
// @namespace   http://rosshill.ca/
// @description ...
// @author      Ross Hill
// @include     https://www.reddit.com/*
// @include     https://np.reddit.com/*
// @include     https://m.reddit.com/*
// @version     1
// @grant       sandbox
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL   https://github.com/Rosshill98/AVoid5/raw/master/av5.js
// @downloadURL https://github.com/Rosshill98/AVoid5/raw/master/av5.js
// ==/UserScript==

var textarea = $('.commentarea .md textarea');
var warning = $('.commentarea .status');
var save = $('.save');
var content;
var a = textarea.on('input',update);
var i = setInterval(update,1000);
function update(){
   content = textarea.val();
   if(content != null){
     if (content.includes('e') || content.includes('E')){
       save.css('background-color','#DD0000');
       save.css('color','white');
       warning.css('color','red');
       warning.html('Warning: FifthGlyph found');
   }
     else{
       save.removeAttr( 'style' );
       warning.removeAttr( 'style' );
       warning.html('');
   }
  }
}
