$(function() {		
	$('.ui.dropdown').dropdown();

	$('.ui.accordion').accordion();

	// $('table').tablesort();

	$('.menu .item').tab();

	// $('.table').DataTable();

	$('#roro-accordion').click(function(){
		if ($(this).html() == "Show More"){
			$(this).html('Show Less');				
		} else {
			$(this).html('Show More');
		}			
	});

	$('.button.roro-modal').on('click', function(event){
		event.preventDefault();
		console.log("modal fired")
		modal = $(this).attr('data-modal');
		$('#'+modal+'.modal').modal('show');
	});


});