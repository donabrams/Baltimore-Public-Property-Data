$.openBmore = $.openBmore || {};
$.openBmore.getPropertyInfo = function(callback, ward, section, block, lot) {
	//TODO: check length of the ward/section/block/lot
	var url = "http://sdatcert3.resiusa.org/rp_rewrite/details.aspx?County=03&SearchType=ACCT&Ward=" + ward + "&Section=" + section + "&Block=" + block + "&Lot=" + lot"#";
	var parsePage = function(page) {
		var $p = $(page);
		$p = $("#Results", $p);
		var toRet = {};
		var tr = $p.children("table").children("tbody").children("tr");
		//tr[0] identifier
		//tr[1] Owner info header
		//tr[2] owner info details
		toRet.owner = {};
		toRet.owner.owners = [];
		toRet.owner.use = [];
		toRet.owner.mailingAddress = [];
		toRet.owner.principalResidence = null;	
		toRet.owner.deedReference = [];
		var tr2 = $(tr[2]).children("td").children("table").children("tbody").children("tr");
		var td = $(tr2[0]).children("td");
		toRet.owner.owners.add($(td[1]).html());
		toRet.owner.use.add($(td[3]).html());
		td = $(tr2[1]).children("td");
		toRet.principalResidence = $(td[1]).html() === "YES";
		td = $(tr[2]).children("td");
		toRet.deedReference = $(td[4]).html().split("<br>");
		//tr[3] Location/structure info header
		//tr[4] Location/structure details
		//tr[5] map info
		//tr[6] special tax areas
		//tr[7] loaction information (property size, etc)
		//tr[8] more location info (property type, description, basement, etc)
		//tr[9] Value Info Header
		//tr[10] Value details
		//tr[11] Transfer info header
		//tr[12] Transfer info details
		//tr[13] Transfer info details2
		//tr[14] Transfer info details3
		//tr[15] Exemption info header
		//tr[16] Exemption info details
		//tr[17] Exemption info details2
		return toRet;
	}
	$.ajax({
		url: url,
		success: function(data) {
			var d = parsePage(data);
			d.url = url;
			callback(d);
		}
	});
};
