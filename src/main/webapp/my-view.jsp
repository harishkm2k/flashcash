
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
	background-image: url("http://media-mcw.cursecdn.com/thumb/e/ea/Xbox_360_symbol.svg/50px-Xbox_360_symbol.svg.png");	
}

.waypoint1 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://www.sportsauthority.com/graphics/product_images/pTSA-14474156t50.gif");	
}

.waypoint2 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://media1.onsugar.com/files/2011/08/31/3/192/1922664/e1e7fa7751ab45b1_51PVUhBRKXL.smallsquare/i/I-Said-Kid--Kid-Guide-Keeping-Your-Private-Parts-Private-10.jpg");	
}

.waypoint3 {
	position: absolute;
	z-index: 4;
	width: 50px;
	height: 50px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	background-image: url("http://29ermountainbikereviews.com/wp-content/uploads/2013/09/kids-bmx-bikeyamaha-moto-12-bmx-bike---walmart-8sj9ugy9-75x75.jpg");	
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
<body bgcolor="#333333" background="images/myview/Canvas-WIP.png">

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
