"use strict";require.config({paths:{jquery:"jquery.min",scrollto:"jquery.scrollTo.min",magnificPopup:"jquery.magnific-popup.min",jscookie:"js.cookie",modernizr:"modernizr-2.8.3.min","pilot-lib/taster-offsite-panel":"http://www.bbc.co.uk/taster/pilot-lib"},shim:{jquery:{exports:"$"},jscookie:{deps:["jquery"],exports:"Cookies"},scrollto:{deps:["jquery"]},magnificPopup:{deps:["jquery"]},modernizr:{exports:"Modernizr"}}});require(["jquery","pilot-lib/taster-offsite-panel","modernizr","jscookie","scrollto","magnificPopup"],function(d,c,e,b){var a=new c(".taster-offsite-panel");d(document).ready(function(){var i=d(window).width(),f=d(window).width();function h(){var k={};var j=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(l,n,o){k[n]=o;});return k;}if(h().iv){d("body").scrollTo(d("#modernslavery"),500,{axis:"y"});d.magnificPopup.open({items:{src:"//embed.wirewax.com/8035526/?enablejsapi=1&loop=1"},type:"iframe"});}if(!b.get("bbccookiesallowed")){d(".cookie-warning").slideDown();}d(".cookie-ok").click(function(j){j.preventDefault();d(".cookie-warning").slideUp();b.set("bbccookiesallowed","true");});d(".hero").addClass("animate-in");if(window.addEventListener){window.addEventListener("scroll",g,false);}else{if(window.attachEvent){window.attachEvent("scroll",g);}}function g(){var n=document.documentElement,l=m;var m=(window.pageYOffset||n.scrollTop)-(n.clientTop||0);var j=d(".video-panel");for(var k=1;k<=d(".video-panel").length;k++){if(m+(f/2)>d("#panel"+k).offset().top+d("#panel"+k).height()){var o=d(j[k-1]);o.addClass("active");}}if(m+(f/2)>(d(".text-panel").offset().top+d(".text-panel").height()/2)){d(".text-panel").addClass("animate-in");}}g();d(window).resize(function(){i=d(window).width(),f=d(window).width();});d(".arrow-btn").click(function(k){k.preventDefault();var j=d(this).attr("href");d("body").scrollTo(d(j),500,{axis:"y"});});d(".popup-vimeo").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160});});});