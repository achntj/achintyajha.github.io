$(".myform").submit(function (e) {
  var $this = $(this);
  $.ajax({
    type: "GET", // GET & url for json slightly different
    url: "https://github.us6.list-manage.com/subscribe/post-json?u=17a470b4b0b42c5f91f52991b&amp;id=ba76bd2ad4&c=?",
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
