
<html>
<head>
<title>Charlie's Galaxy</title>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="http://ijin.net/crSpline/jquery.crSpline.js"></script>

<!-- 
<script type="text/javascript" src="http://ijin.net/crSpline/demo.js"></script>
 -->
<script type="text/javascript" src="js/myview/my-view-spline.js"></script>

<style>
.waypoint {
	position: absolute;
	z-index: 4;
	width: 25px;
	height: 25px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	
	
}

.waypoint0 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint1 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 56px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("images/myview/my-events.png");
}

.waypoint2 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	
}

.waypoint3 {
	position: absolute;
	z-index: 4;
	width: 34px;
	height: 36px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("images/myview/my-trophy.png");	
}

.waypoint4 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}


.waypoint5 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint6 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint7 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
}

.waypoint8 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
		
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
	width: 50px;
	height: 21px;	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("images/myview/spaceship.png");
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
<body background="images/myview/Canvas_WIP.png">

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
<h1 style="color: white; ">Charlie's - Four Wishes !! </h1> 	
<div>
	<div align="right">
		<table>
		
		<tr><td>
		<img src="images/myview/01.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/02.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/03.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/04.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/05.png" alt="Friends Contribution" align="right">
		</td></tr>
		
		<tr><td>
		<img src="images/myview/06.png" alt="Friends Contribution" align="right" onclick="navigateToAlicePage()"/>
		</td></tr>
				
		</table>
	</div>
</div>
</body>
</html>
