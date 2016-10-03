$(document).ready( function(){
$( "p.header2 a" ).attr({
	 href:"javascript:",
	onclick:"javascript:window.open(''+self.location, 'windowname', 'resizable=yes,menubar=no,toolbar=no,scrollbars=yes,width=600,height=950').focus(); return false;"
});
});
