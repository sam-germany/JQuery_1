$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeTo(2000,0.2);
  // $(".green-box").fadeTo(2000,0.5);
  // $(".blue-box").fadeTo(2000,0.4);


  // $(".green-box").fadeToggle();
  // $(".blue-box").fadeToggle();

 // directly hiding or showing
  //   $(".blue-box").hide();
//   $(".blue-box").show();

// hiding or showing with animation
   //   $(".blue-box").hide(1000);
//   $(".blue-box").show(1000);

// hiding or showing with animation
   //   $(".blue-box").slideUp(1000);
//   $(".blue-box").slideDown(1000);

// toggling on showing and hiding
   //   $(".blue-box").slideToggle(1000);


/*$(function () {
   $(".blue-box").animate( {"margin-left": "200px"});
},2000);*/

/*    $(function () {
       $(".blue-box").animate( {"margin-left": "200px"});
    },5000, "linear")*/;


    $(function (){
       $(".blue-box").animate({
          "margin-left": "200px",
           "opacity" : "0"
       },2000)
    });





});
