$(document).ready(() => {
  $.mockjax({
    url: "/success",
    responseText: {
      status: "success",
    }
  });
  
  $.mockjax({
    url: "/error",
    status: 500,
  });


  $('#btn-success').click(() => {
    const url = '/success';
    $.get(url, () => { console.log("User success callback")}); 
  });

  $('#btn-error').click(() => {
    const url = '/error';
    $.get(url, () => { console.log("User error callback")}); 
  });
});
