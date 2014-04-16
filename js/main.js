
$(document).ready(function() {
	add_author("Donald" + " " + "Duck");
	add_author("Mickey" + " " + "Mouse");
	add_author("Uncle" + " " + "Scrooge");
	add_organization("Department of Computer Science");
	$(".dp").datepicker();
	$("#title-error").hide();
	$("#fillin").hide();
	//$("#tabs").tabs();
	
	$("#orgsearch").typeahead({
		source: ["Aalto University","Department of Information Networks","Department of Computer Science","SOBERIT","Department X"]
	});
	$("#personsearch").typeahead({
		source: ["Ronja-Addams Moring","Harri Lampi", "Lauri Naalisvaara", "Matias Kuusela"]
	});
});


function add_author(f,n) {
	$("#authors").append("<li class=\"list-group-item\">"+f+" <span class=\"glyphicon glyphicon-remove-sign pull-right\" onclick=\"remove_list_item(this);\"></span></li>");
}

function add_organization(f) {
	$("#organizations").append("<li class=\"list-group-item\">"+f+" <span class=\"glyphicon glyphicon-remove-sign pull-right\" onclick=\"remove_list_item(this);\"></span></li>");
}

function remove_list_item(item) {
	var jq = $(item);
	jq.parent().remove();
}

function add_new_author_click(event) {
	var aa = $("#fname").val();
	var bb = $("#lname").val();
	var cc = $("#personsearch").val();
	if(cc != "") {
		add_author(cc);
		$("#personsearch").val("");
	} else {
		add_author(aa + " " + bb);
		$("#fname").val("");
		$("#lname").val("");
	}
	$("#author_modal").modal("hide");
}

function add_new_organization_click(event) {
	var aa = $("#orgname").val();
	add_organization(aa);
	$("#organization_modal").modal("hide");
}

function preview_and_save() {
	var title_form_group = $("#title-form-group");
	var title = $("#title");
	var title_val = title.val();
	if(typeof title_val == "undefined" || title_val == "") {
		title_form_group.addClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").show();
		$("#fillin").show("slow");
	} else {
		title_form_group.removeClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").hide();
		$("#fillin").hide("slow");
	}
}