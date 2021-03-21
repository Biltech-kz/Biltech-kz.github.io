window.addEventListener("DOMContentLoaded", function(){

  // Set up references to the DOM elements you'll need acces to:
  var fName = document.getElementById('fname');
  var lName = document.getElementById('lname');
  var dob = document.getElementById('dob');
  var gender = document.getElementById('Gender');
  var oa = document.getElementById("outputArea");
  var btn = document.getElementById("btnSave");
  var frm = document.getElementById("theForm");
  var err = document.getElementById("error1");

  // Set up string variables for the beginning and end of the table
  var beginTable = '<table><tr><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Gender</th></tr>';
  var endTable =   '</table>';

  // Variable to store the entire table as it grows
  var output = beginTable;


  // When the button is clicked, run the suppied function
  btn.addEventListener("click", function() {

     // Gather up the input into an array
     var ar = [fName.value, lName.value , dob.value,gender.value];

     // If there is no first name
     if(!fName.value || !lName.value || !dob.value || !gender) {
       // Display an error
       err.innerHTML = "Invalid Entry";
     } else {
       // There is data, begin a new row
       output +="<tr>";

       // Loop over the array and inject the input element's values into new table cells
       for(var i = 0; i < ar.length; ++i) {
           output += '<td>' + ar[i] + '</td>';
       }
       // End the row
       output +="</tr>";

       // Ask if user is done
       addMore();
     }
  });


  function addMore() {

    if(confirm("Would you like to add more data?")) {
      // Not done yet, clear form out
      theForm.reset();
    } else {
      // Done. close up the table
       output += endTable;
      // Write the string to the waiting output area
       oa.innerHTML = output;
    }

  }


});
