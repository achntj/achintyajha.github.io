$(".myform").submit(function (e) {
  var $this = $(this);
  $.ajax({
    type: "GET", // GET & url for json slightly different
    url: "http://XXXXXXXX.list-manage2.com/subscribe/post-json?c=?",
    data: $this.serialize(),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    error: function (err) {
      alert("Could not connect to the registration server.");
    },
    success: function (data) {
      if (data.result != "success") {
        // Something went wrong, parse data.msg string and display message
      } else {
        // It worked, so hide form and display thank-you message.
      }
    },
  });
  return false;
});
