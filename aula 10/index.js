$(document).ready(
    function(){
$.ajax({
    url:"https://jsonplaceholder.typicode.com/posts",
    type:"GET",
    success:function(data){

           $.each(
            data,
            function(i, item){
                $('#resultado').append(
                    '<li><a  href="resultado.html?opcao='+item.id+'">'+item.title+'</a></li>'
                )

            }

         )
     },      
    error:function(data){

    }
})
    }
)
    

