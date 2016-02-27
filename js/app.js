$(document).ready(function() {

var listButtons = "<span class='done'>Done</span><span class='delete'>Delete</span>";
/* Take in new item */
function newItem() {
	$(".new").keydown(function(event) {
        if(event.which == 13) {
        	// on enter, store as new variable
        	var userInput = $(".new").val();
        	console.log("New item entered: " + userInput);

        	// reset form to default
        	$(".new").val('');

        	// add userInput to list
        	$(".item-list").append("<li>" + userInput + listButtons + "</li>");

        }
	});
}

newItem();

/* Clear and create new list */

//EOF
});