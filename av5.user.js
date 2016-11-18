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
var annoyance = $('.usertext-edit.md-container[style="display: none"]').remove();
var content;
var save;
var warning;
var a = textarea.on('input',update);
var i = setInterval(update,50);
function update(){
   warning = $('.commentarea .status');
   save = $('.usertext-buttons .save');
   textarea = $('textarea:focus');
   content = textarea.val();
   if(content != null){
     if (content.includes('e') || content.includes('E')){
       save.css('background-color','#DD0000');
       save.css('color','white');
       warning.css('color','red');
       warning.html('Warning: FifthGlyph found');
     }
     else{
       save.removeAttr('style');
       warning.removeAttr('style');
       warning.html('');
   }
  }
}
