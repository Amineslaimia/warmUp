var direction = '';
 $('button#left').on('click', function(event){if(direction!=='left'){
   direction='left'
 }});
 $('button#right').on('click', function(event){if(direction!=='right'){
   direction='right'
 }});
 $('button#create').on('click', function(event){if(direction=='right'){
   $('ul#rightul').apend('<li> new item right</li>')
 }else if(direction=='left'){
   $('ul#leftul').apend('<li> new item left</li>')
 }
});
    $('p#output').text( $('input#color').val() ).css('color', 'red'); });
