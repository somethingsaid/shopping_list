$(document).ready(function() {

var listNum = 0;
var listButtons = "<span class='done'>Done</span><span class='delete'>Delete</span>";

/* Take in new item */
function newItem() {
	$(".new").keydown(function(event) {
        if(event.which == 13) {
        	// on enter, store as new variable
        	var userInput = $(".new").val();
        	if(userInput.length > 0) {
        	    listNum ++;
        	    console.log("New item " + listNum + " entered: " + userInput);

        	    // reset form to default
        	    $(".new").val('');

        	    // add userInput to list
        	    $(".item-list").append("<li id='" + listNum + "'>" + userInput + listButtons + "</li>");
        	    $(".item-list #" + listNum).children("span").attr('id', listNum);
            }
            else {
            	console.log("Empty item entered");
            }
        }
	});
}

newItem();

/* Clear and create new list */

$(".clear").click(function() {
    $(".item-list").empty();
    console.log("emptying list");
    listNum = 0;
});

/* Remove item when clicking delete */
$(document).on("click", ".item-list li .delete", function() {
    console.log("you clicked delete on item: " + this.id);
	$("#" + this.id).remove();
});

/* Item strikethrough when clicking done, if already strikethrough, make normal */
//EOF
});