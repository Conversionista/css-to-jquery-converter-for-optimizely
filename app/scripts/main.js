(function(){
  
  
  var URL = 'http://apps.conversionista.se/css-to-jquery-converter/css2.php';
  // var URL = 'http://localhost:8000/css.php';

  $(document).ready(function() {

    $('#sourceForm').submit(function(event) {
        var data = $(this).serializeArray();
        ajaxPost(data);
        event.preventDefault();
    });

  });

  function ajaxPost(postData){
    $.ajax({
      type      : 'POST',
      url       : URL,
      data      : postData,
      // dataType  : 'json',
      encode    : true
    })

      .done(function(data) {
          
        console.log(data[3]);
        console.log(data);
        // console.log(data.success);

        // message = data.message;
      
        // if (data.success !== true) {

          // showStatusMessage('danger', message);
          // $('#jqueryCSS').html(data);
          // if(typeof data !== "undefined"){
            $('#jqueryCSS').text("$('head').append('<style>" + data + "</style>');");
          // } else {
            // console.warn(data);  
          // }
          
          


        // } else {

          

        //   //showStatusMessage('success', message);
        //   delete data.success;
        //   delete data.message;
        //   $('#jqueryCSS').text("$('head').append('<style>" + data + "</style>');");
        //   // console.log(data);


        //   // x = [];

        //   // $.each( data, function( key, value ) {
        //   //   // console.log( key + ": " + value );
        //   //   x.push(value);
        //   // });

        //   // console.log(x);
        //   // updateRows(x);

        // }
      })

      .fail(function(data) {
        console.warn(data);
      });
  }


  var client = new ZeroClipboard( document.getElementById('copyjQuery') );

  client.on( 'ready', function( readyEvent ) {
    // event.target.style.display = "block";
    // alert( "ZeroClipboard SWF is ready!" );

    client.on( 'aftercopy', function( event ) {
      // `this` === `client`
      // `event.target` === the element that was clicked
      // event.target.style.display = "none";
      console.log('Copied text to clipboard: ' + event.data['text/plain'] );
    } );
  } );

})();