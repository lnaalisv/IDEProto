var data = {};
data["Research output"] = {};
data["Research output"]["Contribution to journal"] = {};
data["Research output"]["Contribution to journal"][0] = "Journal Article";
data["Research output"]["Contribution to journal"][1] = "Letter";
data["Research output"]["Contribution to journal"][2] = "Editorial";
data["Research output"]["Working paper"] = {};
data["Research output"]["Working paper"][0] = "Working paper";
data["Research output"]["Working paper"][1] = "Discussion paper";
data["Research output"]["Book"] = {};
data["Research output"]["Book"][0] = "Book";
data["Research output"]["Book"][1] = "Anthology";
data["Activity"] = {};
	
$(function() {
  $('.dropdown-menu li').click(function() {
    $('#left_menu .active:first').toggleClass('active');
    $('#left_menu li:first').toggleClass('active');
    $('.tab-content .active:first').toggleClass('active');
    $('#main-personal').toggleClass('active');
    $('#sub_menu li:first').toggleClass('active');
  });
  
  $('#left_menu li a, #top_left_menu li a').click(function() {
    if($(this).attr('href')=="#main-personal") {
      $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > Personal overview > '+$('#sub_menu .active:first').text());
    } else {
      $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > '+$('.tab-content:first '+$(this).attr('href')+' h1:first').text());
    }
  });
  $('#sub_menu li').click(function() {
    $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > Personal overview > '+$(this).text());
  });
  $('#new-article .nav-tabs:first li').click(function() {
    $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > Add new > Article > '+$(this).text());
  });
  $('#import_bibtex').click(function() {
    $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > Import item > BiBTeX');
  });
});
	
$(document).ready(function() {

	$("#title-error").hide();
	$("#year-error").hide();
	$("#fillin").hide();
	$("#journal-error").hide();
	$("#author-error").hide();
	$("#organization-error").hide();

	$("#year-input").on("input",year_change);
	$("#title").on("input",title_change);
	
	$(".sortable").sortable();
	
	type_select();
	type_select2();
	
	$('#top_left_menu a').click(function() {
    $('#left_menu .active:first').toggleClass('active');
  });
  $('#left_menu a').click(function() {
    $('#top_left_menu .active:first').toggleClass('active');
  });
});

function empty_article() {
	$("#title").val("");
	$("#year-input").val("");
	$("#month-input").val("");
	$("#journals").html("");
	$("#organizations").html("");
	$("#authors").html("");
	$("#numpages").val("");
	$("#abstract").val("");
	$("#doi").val("");
	$("#jpages").val("");
	$("#jvolume").val("");
	$("#jissue").val("");
}
	
function select_click() {
	var item = $("#type-select3").val();
	if(item == "Journal Article") {
		$("#main-add").toggleClass("active");
		$("#new-article").toggleClass("active");
		empty_article();
		$('#top_left_menu .active').toggleClass('active');
	}
}

function article_button_click() {
	empty_article();
	$('#top_left_menu .active').toggleClass('active');
  $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > Add new > Article > '+$('#new-article .active:first a').text());
}

function import_bibtex() {
	$("#file-input").val("");
	$("#import2-modal").modal("show");
}
function import_bibtex2() {
// <div class='col-sm-2'></div><div class='col-sm-4'><h3><span class='glyphicon glyphicon-ok'> Freshly imported</h3></div>
	if($('#article_0:checked').length > 0) {
    $("#output-data").prepend("<div class='row imported-row'><div class='col-sm-6'><h1>Getting to know computer science freshmen</h1><p><b>Authors: </b>Kinnunen, Päivi and Marttila-Kontio, Maija and Pesonen, Erkki<br/><b>2013</b></p></div><div class='col-sm-2'></div><div class='col-sm-4'><h3><span class='glyphicon glyphicon-ok'> Freshly imported</h3></div></div>");
	}
  if($('#article_1:checked').length > 0) {
    $("#output-data").prepend("<div class='row imported-row'><div class='col-sm-6'><h1>Arguments for an information-centric internetworking architecture</h1><p><b>Authors: </b>Trossen, Dirk and Sarela, Mikko and Sollins, Karen<b>2010</b></p></div><div class='col-sm-2'></div><div class='col-sm-4'><h3><span class='glyphicon glyphicon-ok'> Freshly imported</h3></div></div>");
	}
  if($('#article_2:checked').length > 0) {
    $("#output-data").prepend("<div class='row imported-row'><div class='col-sm-6'><h1>A Survey of Ethernet LAN Security</h1><p><b>Authors: </b>Kiravuo, Timo and Sarela, Mikko and Manner, Jukka<b>2013</b></p></div><div class='col-sm-2'></div><div class='col-sm-4'><h3><span class='glyphicon glyphicon-ok'> Freshly imported</h3></div></div>");
  }
  $('#breadcrumb').html('<a href="#" class="icon-black icon-home"></a> Home > Research output');
  $('#top_left_menu .active:first, #left_menu .active:first').toggleClass('active');
  $('#left_menu li:eq(1)').toggleClass('active');
}

function type_select() {
	var item = $("#type-select").val();
	$("#type-select2").html("");
	$("#type-select3").html("");
	for(var prop in data[item]) {
		$("#type-select2").append("<option>" + prop + "</option>");
	}
	
	type_select2();
}

function type_select2() {
	var item = $("#type-select").val();
	var item2 = $("#type-select2").val();
	$("#type-select3").html("");
	var items = data[item][item2];
	for(var prop in data[item][item2]) {
		$("#type-select3").append("<option>" + data[item][item2][prop] + "</option>");
	}
}

function add_new_click(event) {
	//$("#left_menu > li").removeClass("active");
}

function import_click(event) {
	//$("#left_menu li").removeClass("active");
}

function add_stuff_to_list(stuff,list) {
	$(list).append("<li class=\"list-group-item\" data-value='"+stuff+"'>"+stuff+" <span class=\"glyphicon glyphicon-remove-sign pull-right\" onclick=\"remove_list_item(this);\"></span></li>");
}

function remove_list_item(item) {
	var jq = $(item);
	jq.parent().remove();
}

function init_stuff_modal(header,tab1,tab2,tab1firstlabel,tab1lastlabel,tab2firstlabel,submit_function,additional_init_function) {
	$("#add-stuff-header").html(header);
	$("#add-stuff-tab1-header").html(tab1);
	$("#add-stuff-tab2-header").html(tab2);
	
	$("#tab1-first-label").html(tab1firstlabel);
	$("#tab1-last-label").html(tab1lastlabel);
	$("#tab2-first-label").html(tab2firstlabel);
	
	// remove the old event handler
	$("#stuff-submit").off("click");
	if(typeof additional_init_function != "undefined") {
		$("#stuff-submit").on("click",submit_function);
	}
	
	if(typeof additional_init_function != "undefined") {
		additional_init_function();
	}
	
}

function journal_init() {
	$("#tab2-first").typeahead("destroy");
	$("#tab2-first").typeahead({
		source: ["ACM SIGCOMM Computer Communication Review", "MIS Quartely", "Journal of Engineering Education", "IEEE COMMUNICATIONS SURVEYS AND TUTORIALS"]
	});
	$("#tab1-last-group").hide();
}

function journal_submit() {
	var aa = $("#tab1-first").val();
	var cc = $("#tab2-first").val();
	if(cc != "") {
		add_stuff_to_list(cc,"#journals");
	} else {
		add_stuff_to_list(aa,"#journals");
	}
	$("#tab2-first").val("");
	$("#tab1-first").val("");
	$("#stuff-modal").modal("hide");
	$("#journal-group").removeClass("has-error");
	$("#journal-error").hide("slow");
}

function organization_init() {
	$("#tab2-first").typeahead("destroy");
	$("#tab2-first").typeahead({
		source: ["Aalto Department of Information Networks","Aalto Department of Computer Science","Aalto Software Business and Engineering Institute"]
	});
	$("#tab1-last-group").hide();
}

function organization_submit() {
	var aa = $("#tab1-first").val();
	var cc = $("#tab2-first").val();
	if(cc != "") {
		add_stuff_to_list(cc,"#organizations");
	} else {
		add_stuff_to_list(aa,"#organizations");
	}
	$("#tab2-first").val("");
	$("#tab1-first").val("");
	$("#stuff-modal").modal("hide");
	$("#organization-group").removeClass("has-error");
	$("#organization-error").hide("slow");
}

function author_init() {
	$("#tab2-first").typeahead("destroy");
	$("#tab2-first").typeahead({
		source: ["Päivi Kinnunen","Timo Kiravuo","Lauri Malmi","Jukka Manner","Maija Marttila-Kontio","Erkki Pesonen","Karen Sollins","Mikko Särelä","Dirk Trossen"]
	});
	$("#tab1-last-group").show();
}

function author_submit() {
	var aa = $("#tab1-first").val();
	var bb = $("#tab1-last").val();
	var cc = $("#tab2-first").val();
	if(cc != "") {
		add_stuff_to_list(cc,"#authors");
	} else {
		add_stuff_to_list(aa + " " + bb,"#authors");
	}
	$("#tab2-first").val("");
	$("#tab1-first").val("");
	$("#tab1-last").val("");
	$("#stuff-modal").modal("hide");
	$("#author-group").removeClass("has-error");
	$("#author-error").hide("slow");
}

function year_change() {
	if($("#year-input").val() != "") {
		var year_form_group = $("#year-group");
		year_form_group.removeClass("has-error");
		year_form_group.removeClass("has-feedback");
		$("#year-error").hide();
	}
}

function title_change() {
	if($("#title").val() != "") {
		var title_form_group = $("#title-form-group");
		title_form_group.removeClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").hide();
		$("#fillin").hide("slow");
	}
}

function preview_and_save() {
	var validated = true;
	
	// title
	var title_form_group = $("#title-form-group");
	var title = $("#title");
	var title_val = title.val();
	if(typeof title_val == "undefined" || title_val == "") {
		title_form_group.addClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").show();
		$("#fillin").show("slow");
		validated = false;
	} else {
		title_form_group.removeClass("has-error");
		title_form_group.addClass("has-feedback");
		$("#title-error").hide();
		$("#fillin").hide("slow");
	}
	
	// year
	var year_form_group = $("#year-group");
	var year_input = $("#year-input");
	if(year_input.val() == "") {
		year_form_group.addClass("has-error");
		year_form_group.addClass("has-feedback");
		validated = false;
		$("#year-error").show();
	} else {
		year_form_group.removeClass("has-error");
		year_form_group.removeClass("has-feedback");
		$("#year-error").hide();
	}
	
	// journal
	var journal_group = $("#journal-group");
	if($("#journals").children().length == 0) {
		validated = false;
		journal_group.addClass("has-error");
		$("#journal-error").show("slow");
	} else {
		journal_group.removeClass("has-error");
		$("#journal-error").hide("slow");
	}
	
	// author
	var author_group = $("#author-group");
	if($("#authors").children().length == 0) {
		validated = false;
		author_group.addClass("has-error");
		$("#author-error").show("slow");
	} else {
		author_group.removeClass("has-error");
		$("#author-error").hide("slow");
	}
	
	// organization
	var organization_group = $("#organization-group");
	if($("#organizations").children().length == 0) {
		validated = false;
		organization_group.addClass("has-error");
		$("#organization-error").show("slow");
	} else {
		organization_group.removeClass("has-error");
		$("#organization-error").hide("slow");
	}
	
	if(validated) {
		$("#preview-title").val($("#title").val());
		$("#preview-state").val($("#state").val());
		var journal = $($("#journals").children()[0]).attr("data-value");
		$("#preview-journal").val(journal);
		$("#preview-journal-year").val($("#year-input").val());
		$("#preview-journal-month").val($("#month-input").val());
		
		for(var i = 0 ; i < $("#authors").children().length ; i++) {
			var author = $($("#authors").children()[i]).attr("data-value");
			$("#preview-authors").append("<li class='list-group-item'>"+author+"</li>");
		}
		for(var i = 0 ; i < $("#organizations").children().length ; i++) {
			var organization = $($("#organizations").children()[i]).attr("data-value");
			$("#preview-organizations").append("<li class='list-group-item'>"+organization+"</li>");
		}		
		
		$("#preview-peer").val($("#month-input").val());
		$("#preview-modal").modal("show");
	} else {
		$("#bh").removeClass("active");
		$("#ch").removeClass("active");
		$("#ah").addClass("active");
		
		$("#b").removeClass("active");
		$("#c").removeClass("active");
		$("#a").addClass("active");
	}
}

function add_article() {
	var authors = "";
	for(var i = 0 ; i < $("#authors").children().length ; i++) {
		var author = $($("#authors").children()[i]).attr("data-value");
		authors += author + ", ";
	}
	authors = authors.substring(0,authors.length - 2);
	$("#output-data").prepend("<div class='row imported-row'><div class='col-sm-6'><h1>"+$("#title").val()+"</h1><p><b>Authors: </b>"+authors+"<br/><b>"+$("#year-input").val()+"</b></p></div><div class='col-sm-2'></div><div class='col-sm-4'><h3><span class='glyphicon glyphicon-ok'> Freshly created</h3></div></div>");
	empty_article();
}