$('#e1').submit(function(){
 return false;
});

$('#login').click(function(){
 $.post(
 $('#e1').attr('action'),
 $('#e1 :input').serializeArray(),
 function(result){
 $('#result').html(result);
 }
 );
});
