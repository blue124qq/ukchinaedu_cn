$(document).ready(function(){var COOKIE_GDPR='gdpr_allow';var ID_GDPR='gdpr_id';function showGDPR(text,button){if(getCookie(COOKIE_GDPR)){return;}
if(!button){button='Okay';}
if(!text){text='We save you cookies'}
var elemDiv=document.createElement('div');elemDiv.className='gdpr';elemDiv.id=ID_GDPR;elemDiv.innerHTML='<span class="gdpr_text">'+text+'</span>'+
'<span class="gdpr_button" onClick="window.showGDPR.close()">'+button+'</span>';document.body.appendChild(elemDiv);function getCookie(name){var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([.$?*|{}()[]\\\/+^])/g,'\\$1')+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):undefined;}}
showGDPR.close=function(){setCookie(COOKIE_GDPR,'y');window.document.getElementById(ID_GDPR).style.cssText='display: none;';ga('send','event','cookies','accept');}
window.showGDPR=showGDPR;function setCookie(name,value,options){options=options||{};var expires=options.expires;if(typeof expires==="number"&&expires){var d=new Date();d.setTime(d.getTime()+expires*1000);expires=options.expires=d;}
if(expires&&expires.toUTCString){options.expires=expires.toUTCString();}
value=encodeURIComponent(value);var updatedCookie=name+"="+value;for(var propName in options){updatedCookie+="; "+propName;var propValue=options[propName];if(propValue!==true){updatedCookie+="="+propValue;}}
document.cookie=updatedCookie;}
showGDPR("We use cookies to give you the best online experience. By using our website you agree to our use of cookies in accordance with <a href='https://www.semrush.com/cookie-policy' target='_blank'>our cookie policy.</a>","I accept cookies");});