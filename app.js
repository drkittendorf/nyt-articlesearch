 // we need a jquery cdn
 // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 let apiKey = 'AO38D6BatnMPCjZz5cOSOjnHOGhlCUm5';

 $.ajax({
   url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`,
   method: 'GET'
 }).then(function(response){


   console.log(response);



 });