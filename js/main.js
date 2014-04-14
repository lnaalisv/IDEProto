
$(document).ready(function() {
	add_author("Donald","Duck");
	add_author("Mickey","Mouse");
	add_author("Uncle","Scrooge");
	$(".dp").datepicker();
	$("#title-error").hide();
	//$("#tabs").tabs();
});


function add_author(f,n) {
	$("#authors").append("<li class=\"list-group-item\">"+f+" "+n+" <span class=\"glyphicon glyphicon-remove-sign pull-right\" onclick=\"remove_list_item(this);\"></span></li>");
}

function remove_list_item(item) {
	var jq = $(item);
	jq.parent().remove();
}

function add_new_author_click(event) {
	var aa = $("#fname").val();
	var bb = $("#lname").val();
	add_author(aa,bb);
	$("#author_modal").modal("hide");
}

function preview_and_save() {
	var title_form_group = $("#title-form-group");
	var title = $("#title");
	var title_val = title.val();
	if(typeof title_val == "undefined" || title_val == "") {
		title_form_group.addClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").show();
	} else {
		title_form_group.removeClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").hide();
	}
}