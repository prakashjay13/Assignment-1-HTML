function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  $(document).ready(function(){
    $("form").submit(function(){
      alert("Submitted");
    });
  });



 
