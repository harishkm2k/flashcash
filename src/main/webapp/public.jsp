
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>jQuery Popup Overlay</title>
    <meta name="description" content="jQuery plugin for responsive and accessible modal overlays and tooltips.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://vast-eng.github.io/jquery-popup-overlay/css/bootstrap.css">
    <link rel="stylesheet" href="http://vast-eng.github.io/jquery-popup-overlay/css/bootstrap-responsive.css">
    <link rel="stylesheet" href="http://vast-eng.github.io/jquery-popup-overlay/css/font-awesome.css">
    <link rel="stylesheet" href="http://vast-eng.github.io/jquery-popup-overlay/css/pygments.css">
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="js/jquery.popupoverlay.js"></script>
</head>
<body background="images/Gifted_public_view.png">


<div class="container">
  <div id="A" style="left:250px;"> Default    <br /> mouse<br/>position </div>
        <div id="my_tooltip" class="well">
            <a href="#" class="my_tooltip_close" style="float:right;padding:0 0.4em;">×</a>
  <form action="#">
  <p><label for="name">Name</label> <input type="text" id="name" /></p>
  <p><label for="e-mail">E-mail</label> <input type="text" id="e-mail" /></p>
  <p><label for="messagep">personal Message</label> <textarea>Enter a message</textarea></p>
  <p class="submit"><input type="submit" value="Submit" /></p>
  </form>
        </div>




</div>

<script>
$(document).ready(function() {

    $('#A').(function(){

                $('#my_tooltip').popup({
                     type: 'tooltip',
                     autozindex: true,
                     horizontal: 'center',
                     vertical: 'bottom'
                 });
    });



});
</script>
<style>
/* CSS Tooltip */
.css_tooltip {
    position: relative;
}
.css_tooltip_content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 30px;
    left: -40px;
    background: #fff;
    width: 10em;
    padding: 2px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}
.css_tooltip_content2 { 
    left: 225px;
    bottom: auto;
}
.css_tooltip:hover .css_tooltip_content {
    visibility: visible;
    opacity: 1;
}
label
{
width: 4em;
float: left;
text-align: right;
margin-right: 0.5em;
display: block
}

.submit input
{
margin-left: 4.5em;
}
#A{ width:100px;height:100px;cursor:pointer;position:absolute;top:50px; }
</style>


</body>
</html>