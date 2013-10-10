
<html>
<head>
<title>jQuery.crSpline</title>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery.crSpline.js"></script>

<!-- 
<script type="text/javascript" src="http://ijin.net/crSpline/demo.js"></script>
 -->
<script type="text/javascript" src="js/spline.js"></script>

<style>
.waypoint {
	position: absolute;
	z-index: 4;
	width: 26px;
	height: 26px;
	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://www.sacred-texts.com/the/sd/sd1-4a.jpg");
	
}

.path-dot {
	position: absolute;
	z-index: 1;
	width: 4px;
	height: 4px;
	font: 0px;
	background-color: #dca3a3;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
}

.mover {
	position: absolute;
	z-index: 5;
	width: 40px;
	height: 40px;	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://www.rw-designer.com/cursor-view/52792.png");
}

#snippet {
	float: left;
	clear: both;
	z-index: 0;
	color: #dcdccc;
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana"
}

#snippet pre {
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana"
}

#snippet a {
	/*color: #4f4faf;*/
	color: #5fbf5f;
	text-decoration: none;
}

#snippet a:hover {
	text-decoration: underline;
	color: #4fff4f;
}

#settings {
	float: left;
	clear: both;
	color: #dcdccc;
}

.option {
	clear: both;
}

* {
	border: 0;
	font-family: "Lucida Console", "Monaco", "Arial", "Verdana";
}
</style>
</head>
<body bgcolor="#333333">

<!-- 
	<div id="snippet">
		<pre>
// jQuery.crSpline
// - <a
				href="http://github.com/MmmCurry/jquery.crSpline/raw/master/jquery.crSpline.js">Download</a> - <a
				href="http://github.com/MmmCurry/jquery.crSpline">View Source</a> - <a
				href="http://plugins.jquery.com/project/crSpline">Plugin Page</a> -

$(".mover").animate({
	crSpline: $.crSpline.buildSequence([[x0, y0], [x1, y1], ... [x9, y9]]),
	duration: 20000
});
</pre>

	</div>
 -->
 
 	<!--  
	<div id="settings">
		<div class="option">
			<input type="checkbox" id="show-waypoints" checked="checked">
			Show Waypoints
		</div>
		<div class="option">
			<input type="checkbox" id="show-trail" checked="checked">
			Show Trail
		</div>
	</div>
 	-->
<h1>Charlie's Gift Gallery</h1> 	
</body>
</html>
