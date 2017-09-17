//Counter code
var button = getElementById('counter');

button.onclick = function() {
    //create a request object.
    var request = newXMLHttpRequest();
    
    
    //Capture the response and store it in a variable.
    request.onreadystatechange = function () {
      if(request.readyState=== XMLHttpRequest, DONE) {
          //Take some action
          if (request.status===200){
              var counter= requst.responseText
          }
      } 
        //Not done yet
    };
    //Make the request
    request.open('GET', 'http://lalitjad98.imad.hasura-app.io/counter',true);
    request.send(null);
};