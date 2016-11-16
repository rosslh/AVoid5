// ==UserScript==
// @name        av5
// @namespace   http://rosshill.ca/
// @description ...
// @author      Ross Hill
// @include     https://www.reddit.com/*
// @include     https://np.reddit.com/*
// @include     https://m.reddit.com/*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/Rosshill98/AVoid5/master/av5.js
// @downloadURL   https://raw.githubusercontent.com/Rosshill98/AVoid5/master/av5.js
// ==/UserScript==

var textarea = $('.md textarea');
var content = textarea.val();
textarea.on('input',function(e){
   content = textarea.val();
   if(content != null){
     if (content.includes('e') || content.includes('E')){
       $('.save').css('display','none');
     }
     else{
       $('.save').css('display','inline-block');
     }
   }
})();
