$(document).ready(function() {
    
    $(".herb-form").on("submit", function(event) {
      event.preventDefault();
  
      var herb_id = $(this).children(".herb_id").val();
      console.log(herb_id);
      $.ajax({
        method: "PUT",
        url: "/herb/" + herb_id
      }).then(function(data) {
      
        location.reload();
      });
  
    });
  });
  