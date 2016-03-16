$(function() {
	$('#Sasan').on('loaded.bs.modal', function (e) {
	    console.log('running this modal function');
	    $(this).appendTo('#iFrameSection');
	});

});

function yellowDog() {
	console.log('it is reading the customscripts');
}

yellowDog();
