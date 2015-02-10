(function(){
  var e1 = ace.edit('css');
  e1.setTheme('ace/theme/github');
  e1.getSession().setMode('ace/mode/css');

  var e2 = ace.edit('jquery');
  e2.setTheme('ace/theme/github');
  e2.getSession().setMode('ace/mode/javascript');

  
  var URL = 'https://api.conversionista.se/css/css2.php';
  // var URL = 'http://localhost:8000/css.php';

  $(document).ready(function() {

    $('#convert').click(function(event) {

        // var arr = [];

        // arr.css = e1.getValue();

        // var data = $(arr).serializeArray();

        // var data = {{name:'css', value: e1.getValue() }};
        var data = { css: e1.getValue() };


        // console.log(data);
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
        console.log(data);
        // console.log(data[3]);
        // console.log(data);
        // console.log(data.success);

        // message = data.message;
      
        // if (data.success !== true) {

          // showStatusMessage('danger', message);
          // $('#jqueryCSS').html(data);
          // if(typeof data !== "undefined"){
            // var str = "$('head').append('<style>" + data + "</style>');";
            // $('#jquery').text(str);
          // } else {
            // console.warn(data);  
          // }
          
          


        // } else {

          

        //   //showStatusMessage('success', message);
        //   delete data.success;
        //   delete data.message;
        var str = '$("head").append("<style>' + data + '</style>");';
        str = str.replace(/\s+/g, '');
        // str = str.replace(/[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, '');
        e2.setReadOnly(true);
        e2.setValue(str);
        $('#copyjQuery').text('Copy');
        ZeroClipboard.setData('text/plain', e2.getValue());

        //   $('#jqueryCSS').text(");");
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
      $('#copyjQuery').text('Copied!');
      // `this` === `client`
      // `event.target` === the element that was clicked
      // event.target.style.display = "none";
      console.log('Copied text to clipboard: ' + event.data['text/plain'] );
    } );
  } );

})();