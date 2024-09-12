$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

// button process
$("#next-1").click(function() {
	if ($(this).hasClass("disabled")) {
		$("#send-2").show();
		$("#send-1").show();
	}
	else{
		$(this).text('Processing..');
		$("#send-2").delay(2000).show(0);
		$("#send-1").delay(2000).hide(0);
	}
});

$("#fund-btn").click(function() {
	if ($(this).hasClass("disabled")) {
		$("#processing").hide();
		$("#send-4").hide();
		$("#send-2").show();
	}
	else{
		$("#processing").show();
		setTimeout(function() {
			$("#processing").hide();
		}, 3000);
		$("#send-4").delay(3000).show(0);
		$("#send-2").hide();
	}
});

$("#back-btn").click(function() {
	$("#send-4").hide();
	$("#send-1").show();
});



// FIRST VALUE

$('#userid').change(function(){
	var inputValue = $("#userid").val();
	if (inputValue !== '') {
		$('#next-1').removeClass('disabled');
	} 
	else{
		$('#next-1').addClass('disabled');
	}
})

$('#fund-value').change(function(){
	var inputValue = $("#fund-value").val();
	if (inputValue > 0) {
		$('#fund-btn').removeClass('disabled');
	} 
	else{
		$('#fund-btn').addClass('disabled');
	}
})

$(document).ready(function() {
	$("#fund-value").on("input", function() {
		var newValue = $(this).val();
		
		$("#send-val").text(newValue);
	});

	$("#userid").on("input", function() {
		var newValue1 = $(this).val();
		
		// Update the content of the <div> with ID "output"
		$("#usename").text(newValue1);
		$("#username").text(newValue1);

	});
});

