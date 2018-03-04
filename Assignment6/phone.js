$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_add").hide(); // hide the element with ID "otherElement"
    $("#content_contact").hide();
	$("#content_gesture").hide();
	$("#content_about").hide();
});

$("#dialer").click(function() { // when "button_id" is clicked
    $("#content_add").hide(); // hide the element with ID "otherElement"
    $("#content_contact").hide();
    $("#content_dialer").show();
	$("#content_gesture").hide();
	$("#content_about").hide();
});

$("#contact").click(function() { // when "button_id" is clicked
    $("#content_dialer").hide(); // show element
    $("#content_add").hide(); // hide the element with ID "otherElement"
    $("#content_contact").show();
	$("#content_gesture").hide();
	$("#content_about").hide();
});


$("#addContact").click(function() { // when "button_id" is clicked
    $("#content_dialer").hide(); // show element
    $("#content_contact").hide();
    $("#content_add").show(); // hide the element with ID "otherElement"
	$("#content_gesture").hide();
	$("#content_about").hide();
});

$("#testGesture").click(function() { // when "button_id" is clicked
    $("#content_dialer").hide(); // show element
    $("#content_contact").hide();
    $("#content_add").hide(); // hide the element with ID "otherElement"
	$("#content_gesture").show();
	$("#content_about").hide();
});
$("#about").click(function() { // when "button_id" is clicked
    $("#content_dialer").hide(); // show element
    $("#content_contact").hide();
    $("#content_add").hide(); // hide the element with ID "otherElement"
	$("#content_gesture").hide();
	$("#content_about").show();
});

$("#one").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "1")
	//alert($("#num_field").val())
});
$("#two").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "2")
	//alert($("#num_field").val())
});
$("#three").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "3")
	//alert($("#num_field").val())
});
$("#four").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "4")
	//alert($("#num_field").val())
});
$("#five").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "5")
	//alert($("#num_field").val())
});
$("#six").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "6")
	//alert($("#num_field").val())
});
$("#seven").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "7")
	//alert($("#num_field").val())
});
$("#eight").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "8")
	//alert($("#num_field").val())
});
$("#nine").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "9")
	//alert($("#num_field").val())
});
$("#zero").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "0")
	//alert($("#num_field").val())
});
$("#star").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "*")
	//alert($("#num_field").val())
});
$("#hash").click(function() { // when "button_id" is clicked
	$("#num_field").val($("#num_field").val() + "#")
	//alert($("#num_field").val())
});
$("#dial_clear").click(function() { // when "button_id" is clicked
	$("#num_field").val("")
	//alert($("#num_field").val())
});

downX = 0;
downY = 0;
upX = 0;
upY = 0;
$("#gesture_area").mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
	$("#gesture_output").val("mouse down");
	//alert($("#gesture_output").val());
});
$("#gesture_area").mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;
	if(downX == upX && downY == upY)
		$("#gesture_output").val("mouse up");
	else if (downX > upX )
		$("#gesture_output").val("swipe left");
	else if (downX < upX )
		$("#gesture_output").val("swipe right");
	else if (downY > upY)
		$("#gesture_output").val("swipe up");
	else if ( downY < upY)
		$("#gesture_output").val("swipe down");
	//alert($("#gesture_output").val())
});
// tab change at dial
$("#swipe_dialer").mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
//	$("#gesture_output").val("mouse down");
	//alert($("#gesture_output").val());
});
$("#swipe_dialer").mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;
 	if (downX < upX )
	{
		$("#content_dialer").hide(); // show element
	    $("#content_add").hide(); // hide the element with ID "otherElement"
	    $("#content_contact").show();
		$("#content_gesture").hide();
		$("#content_about").hide();
	}
	//alert($("#gesture_output").val())
});
//tab change contacts
$("#swipe_contact").mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
//	$("#gesture_output").val("mouse down");
	//alert($("#gesture_output").val());
});
$("#swipe_contact").mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;
 	if (downX < upX )
	{
		$("#content_dialer").hide();
	    $("#content_contact").hide();
		$("#content_add").show();
		$("#content_gesture").hide();
		$("#content_about").hide();
	}
	else if(downX > upX )
	{
		$("#content_dialer").show(); // show element
	    $("#content_contact").hide();
	 	$("#content_add").hide();
		$("#content_gesture").hide();
		$("#content_about").hide();
	}
	//alert($("#gesture_output").val())
});
$("#swipe_add").mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
//	$("#gesture_output").val("mouse down");
	//alert($("#gesture_output").val());
});
$("#swipe_add").mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;
 	if (downX < upX )
	{
		$("#content_dialer").hide();
	    $("#content_contact").hide();
		$("#content_add").hide();
		$("#content_gesture").show();
		$("#content_about").hide();
	}
	else if(downX > upX )
	{
		$("#content_dialer").hide(); // show element
	    $("#content_contact").show();
	 	$("#content_add").hide();
		$("#content_gesture").hide();
		$("#content_about").hide();
	}
	//alert($("#gesture_output").val())
});
$("#swipe_gesture").mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
//	$("#gesture_output").val("mouse down");
	//alert($("#gesture_output").val());
});
$("#swipe_gesture").mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;
 	if(downX > upX )
	{
		$("#content_dialer").hide(); // show element
	    $("#content_contact").hide();
	 	$("#content_add").show();
		$("#content_gesture").hide();
		$("#content_about").hide();
	}
	else if(downX < upX){
		$("#content_dialer").hide(); // show element
	    $("#content_contact").hide();
	 	$("#content_add").hide();
		$("#content_gesture").hide();
		$("#content_about").show();
	}
	//alert($("#gesture_output").val())
});
$("#swipe_about").mousedown(function(event){
	downX = event.pageX;
	downY = event.pageY;
//	$("#gesture_output").val("mouse down");
	//alert($("#gesture_output").val());
});
$("#swipe_about").mouseup(function(event){
	upX = event.pageX;
	upY = event.pageY;
 	if(downX > upX )
	{
		$("#content_dialer").hide(); // show element
	    $("#content_contact").hide();
	 	$("#content_add").hide();
		$("#content_gesture").show();
		$("#content_about").hide();
	}
	//alert($("#gesture_output").val())
});
