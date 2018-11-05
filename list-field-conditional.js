selectDropdowns = ["[name='input_17[]']", "[name='input_43[]']", "[name='input_44[]']","[name='input_45[]']"]
// these inputs will be of the format input_n[], found by Inspect Element in your browser

selectDropdowns.forEach( function(el){ $(el).addClass( 'classForIdentifyingElementsAsRelated' ) })

//#gform_page_x_y is the page these elements live on - again, found with Inspect Element, although usually a matter of #gform_page_1_n, with n just being the page number
$( '#gform_page_x_y' ).on( "click",".add_list_item" ,function(){
  selectDropdowns.forEach( function(el){ $(el).addClass( 'classForIdentifyingElementsAsRelated' ) })
})


$('#gform_page_1_2').on('change', 'classForIdentifyingElementsAsRelated', function (e) {
  arrayFields =  $.map( 
    $('classForIdentifyingElementsAsRelated'), 
      function( selectField ){ 
        return $( selectField ).val() 
      }
    )
    
  // some logic you'd like to perform given the status of those inputs - in this case, if there is some conflict in what they say
  if ( arrayFields.includes("Oceania Is At War With Eastasia") && arrayFields.includes("Ocenia Is At War With Eurasia") ) {
      console.log('Contradiction!')
  } else {
      console.log('No contradiction.')
  }
});
