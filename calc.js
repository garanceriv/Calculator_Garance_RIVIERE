var nb1 = 0, nb2 = 0;

var op = 'null';
var cpt = 0;

function ajouteChiffre(form, val) {
	form.texte.value += val;
}

function ajoutePoint(form) {
	if (form.texte.value.length == 0) {
		form.texte.value = "0.";
	}
	else {
		var j = 0;
		for (var i = 0; i < form.texte.value.length; i++) {
			if (form.texte.value.charAt(i) == ".") {
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : (alert("D\351j\340 entr\351."));
	}
}

function setOp(opType) {
	if (op == 'null') {
		op = opType;
	}
	else {
		alert("Vous \352tes d\351j\340 en train de faire une " + op + ".");
		form.texte.value = "";
	}
}

function raz(form) {
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}

function store(form) {
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0)) {
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1)) {
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}

}

function storeEq(form) {
	if (cpt == 1) {
		store(form);
	}
}

function log() {
	let x = document.getElementById("txt").value;
	let y = math.log(x) / math.log(10);
	document.getElementById("txt").value = y;
}

function calc(form) {

	if (op == "somme") {
		form.affichage.value = parseInt(nb1) + parseInt(nb2);
	}
	else if (op == "soustraction") {
		form.affichage.value = parseInt(nb1) - parseInt(nb2);
	}
	else if (op == "multiplication") {
		form.affichage.value = nb1 * nb2;
	}
	else if (op == "division") {
		if (nb2 == 0) {
			alert("On ne peut pas diviser par z\351ro.");
		}
		else {
			form.affichage.value = nb1 / nb2;
		}
	}
	else if (op == "factorielle") {
		if (nb1 == 1) {
			form.affichage.value = nb1 * 1
		}
		if (nb1 == 2) {
			form.affichage.value = nb1 * 1
		}
		if (nb1 == 3) {
			form.affichage.value = nb1 * 2 * 1
		}
		if (nb1 == 4) {
			form.affichage.value = nb1 * 3 * 2 * 1
		}
		if (nb1 == 5) {
			form.affichage.value = nb1 * 4 * 3 * 2 * 1
		}
		if (nb1 == 6) {
			form.affichage.value = nb1 * 5 * 4 * 3 * 2 * 1
		}
		if (nb1 == 7) {
			form.affichage.value = nb1 * 6 * 5 * 4 * 3 * 2 * 1
		}
		if (nb1 == 8) {
			form.affichage.value = nb1 * 7 * 6 * 5 * 4 * 3 * 2 * 1
		}
		if (nb1 == 9) {
			form.affichage.value = nb1 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
		}

		else if (op == "pourcent") {
			form.affichage.value = nb1 * nb2 * 100;
		}


	}




}

