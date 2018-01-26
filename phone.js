$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_add").hide(); // hide the element with ID "otherElement"
    $("#content_contact").hide();
});

$("#dialer").click(function() { // when "button_id" is clicked
    $("#content_add").hide(); // hide the element with ID "otherElement"
    $("#content_contact").hide();
    $("#content_dialer").show();
});

$("#contact").click(function() { // when "button_id" is clicked
    $("#content_dialer").hide(); // show element
    $("#content_add").hide(); // hide the element with ID "otherElement"
    $("#content_contact").show();
});


$("#addContact").click(function() { // when "button_id" is clicked
    $("#content_dialer").hide(); // show element
    $("#content_contact").hide();
    $("#content_add").show(); // hide the element with ID "otherElement"

});
