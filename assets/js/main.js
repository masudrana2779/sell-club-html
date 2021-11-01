jQuery.noConflict();

jQuery(function($){
 
	
	//js for Tooltip
	if (typeof $.fn.tooltipster == "function") {
		$('.tooltip-link').tooltipster({
		   animation: 'fade',
		   delay: 200,
		   theme: 'tooltipster-default',
		   touchDevices: true,
		   position: 'top',
		   trigger: 'hover'
		}); 	
		
		
		
		$('.modal').on('shown.bs.modal', function () {
			$('.tooltip-link').trigger("mouseleave");
			
		});
		
	}
	
	
	//js for Modal Show Hide
	$(document).on('click', '.loginNow', function(){
		$('#signupPage').modal('hide');
		$('#loginPage').modal('show');
		return false;
	});
	
	$(document).on('click', '.createAccount', function(){
		$('#loginPage').modal('hide');
		$('#signupPage').modal('show');
		return false;
	});
	
	
	$(document).on('click', '.ownTermsStep1', function(){
		$('#own-terms-step1').modal('hide');
		$('#own-terms-step2').modal('show');
		return false;
	});
	
	$(document).on('click', '.ownTermsStep2', function(){
		$('#own-terms-step2').modal('hide');
		$('#own-terms-step3').modal('show');
		return false;
	});

	$(document).on('click', '.ownTermsStep3', function(){
		$('#own-terms-step3').modal('hide');
		$('#previewPost').modal('show');
		return false;
	});
	
	$(document).on('click', '.listBusiness1', function(){
		$('#listBusiness1').modal('hide');
		$('#listBusiness2').modal('show');
		return false;
	});
	
	$(document).on('click', '.listBusiness2', function(){
		$('#listBusiness2').modal('hide');
		$('#listBusiness3').modal('show');
		return false;
	});
	
	$(document).on('click', '.listBusiness3', function(){
		$('#listBusiness3').modal('hide');
		$('#listBusiness4').modal('show');
		return false;
	});
	
	$(document).on('click', '.listBusiness4', function(){
		$('#listBusiness4').modal('hide');
		$('#listBusiness5').modal('show');
		return false;
	});
		
	
});