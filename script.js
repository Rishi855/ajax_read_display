function loadStudents() {
    // Create an XMLHttpRequest object.
    var xhr = new XMLHttpRequest();
  
    // Set the request method to GET.
    xhr.open("GET", "student.xml", true);
  
    // Set the onreadystatechange event handler.
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // Check the response status code.
        if (xhr.status === 200) {
          // The request was successful.
          // Parse the XML response.
          var students = xhr.responseXML.documentElement.getElementsByTagName("student");
  
          // Create an HTML table.
          var table = document.createElement("table");
  
          // Create a header row.
          var headerRow = document.createElement("tr");
          for (var i = 0; i < students[0].childNodes.length; i++) {
            var headerCell = document.createElement("th");
            headerCell.textContent = students[0].childNodes[i].textContent;
            headerRow.appendChild(headerCell);
          }
          table.appendChild(headerRow);
  
          // Create a row for each student.
          for (var i = 1; i < students.length; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < students[i].childNodes.length; j++) {
              var cell = document.createElement("td");
              cell.textContent = students[i].childNodes[j].textContent;
              row.appendChild(cell);
            }
            table.appendChild(row);
          }
  
          // Append the table to the DOM.
          document.getElementById("students").appendChild(table);
        } else {
          // The request failed.
          alert("Request failed with status code " + xhr.status);
        }
      }
    };
  
    // Send the request.
    xhr.send();
  }
  