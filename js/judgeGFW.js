<script type="text/javascript">
	function isOutsideGreatFirewall()
	{
		// judge whether the user is inside or outside Mainland China
		// by testing if the YouTube Icon is accessible
		var image = new Image();
		image.onload = function()
		{
			// The user can access youtube
			return true;
		};
		image.onerror = function()
		{
			// The user can't access youtube
			return false;
		};
		image.src = "http://youtube.com/favicon.ico";
	}	 
</script>