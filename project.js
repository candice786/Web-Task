jQuery(document).ready(function($) {
   $("#hover").hover(function() {
      $("#hover1").hide();
      $("#hover2").show();
      
   	},function() {
        $("#hover1").show();
        $("#hover2").hide();
	});
});