// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// jquery tabs
$(document).ready(function() {
  $("#tabs").tabs();
});

$(function() {
	$( "#tabs" ).tabs({
		event: "mouseover"
	});
});

$(document).ready(function() {
  var $tabs = $("#tabs").tabs();
  var changeTab = function(ev){   
    ev.preventDefault();     
    var tabIndex = this.hash.charAt(this.hash.length-1) -1;  
    $tabs.tabs('select', tabIndex);    
   };  
  $('a.tablink').click(changeTab);
});