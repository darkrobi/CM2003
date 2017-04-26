
$(document).ready(function () {
	 $('.search_button').click( function() {
	
		 
	   if ( $('#search-box-1').val() == '' ) {
		
		   	alert( 'Please enter postcode' );
		   return;
		   
		   
	  }
		 else{
			 var postcode = $('#search-box-1').val(); 
		
			 callApi(postcode); }
		 	
		 
	 });
/*search and overlay
     $('.search_button').click(function() {
		 callApi();
     });
	 */
	 
		
/*info button*/
	
     $("#info").click(function () {
         $(".info_box").fadeIn(300);
     });
	
 /*info button close*/
     $(".info_box").click(function () {
         $(".info_box").fadeOut(300);
     });

 /*overlay close*/
     /*$("#overlay").click(function () {
         $("#overlay").fadeOut(300);
     });*/

 
 
/*enter trigger for search button*/
    $('.Search-box').keypress(function(e){
      if(e.keyCode==13)
      $('.search_button').click();
    });
});

//rollovers

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}// JavaScript Document
