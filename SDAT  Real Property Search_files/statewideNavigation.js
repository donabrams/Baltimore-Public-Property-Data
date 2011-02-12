// JavaScript Document

function showStatewideNavigation(color)
{
	// verify color is passed in 
	if (color)
		color = color.toLowerCase();
	else
		color = "white";
	
	// limit color selections
	switch (color)
	{
		case "black":
			color = "#000000";
			break;
		case "white":
			color = "#FFFFFF";
			//color = "#FEEDB9";
			break;
		default:
			color = "#FFFFFF";
			break;
	}
	
	var nav;		
	nav = '<div style="font-family: arial,verdana,helvetica,sans-serif; font-size: xx-small; padding: 5px 10px 0px 0px; color: ' + color + '">';
nav += '<a href="http://problemsolver.maryland.gov" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">Problem Solver</a>|';
	nav += '<a href="http://www.maryland.gov" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">Maryland.gov</a>|';
	nav += '<a href="http://www.maryland.gov/onlineservices/Pages/onlineservices.aspx" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">Online Services</a>|';
	nav += '<a href="http://www.maryland.gov/government/Pages/Serving.aspx" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">State Agencies</a>|';
	nav += '<a href="http://www.maryland.gov/phonebook" target="_blank" style="text-decoration: none; padding: 0px 5px 0px 5px; color: ' + color + ';">Phone Directory</a>';
	nav += '</div>';
	document.write(nav);
}