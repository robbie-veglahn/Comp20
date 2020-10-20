	// isFactor takes a number and a factor and returns true iff the number...
// evenly divides by the factor
function isFactor(num, factor) {
	if (num % factor == 0) {
		return true;
	} else {
		return false;
	}
}

// Unit_test_isFact provides unit testing for the isFactor function, returns...
// true if all tests pass
//function unit_test_isFact() {
//	if (isFactor(2, 2) == true &&
//		isFactor(3, 2) == false &&
//		isFactor(20, 2) == true &&
//		isFactor(21, 7) == true &&
//		isFactor(21, 8) == false &&
//		isFactor(30, 3) == true &&
//		isFactor(30, 4) == false &&
//		isFactor(90, 30) == true &&
//		isFactor(2, 1) == true &&
//		isFactor(36, 6) == true) {
//		return true;
//	} else {
//		return false;
//	}
//}


// displayInput takes the user input from the form 
function displayInput(uinput1, uinput2) {
	document.getElementById("show numbers").innerHTML = "Number 1: " + uinput1 + " Number 2: " + uinput2;
}


// showArray takes an array and displays all the elements of the array on a div
function showArray(arr, div) {
	var arr_len = arr.length;
	if (div == 1) {
		document.getElementById("show fact1").innerHTML = "Array to display: ";
	} else if (div == 2) {
		document.getElementById("show fact2").innerHTML = "Array to display: ";
	}
	for (var i = 0; i < arr_len; i++) {
		if (div == 1) {
			document.getElementById("show fact1").innerHTML += arr[i] + ", ";
		} else if (div == 2) {
			document.getElementById("show fact2").innerHTML += arr[i] + ", ";
		}
	}
}

// addArray takes an array and returns the sum of all its elements
function addArray(arr) {
	var arr_len = arr.length;
	var accum = 0;
	for (var i = 0; i < arr_len; i++) {
		accum += arr[i];
	}
	return accum;
}

// Unit_test_addArr provides unit testing for the isFactor function, returns...
// true if all tests pass
//function unit_test_showArr() {
//	var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
//	var arr2 = [1, 2, 3];
//	var arr3 = [0];
//	if (addArray(arr1) == 36 &&
//		addArray(arr2) == 6 &&
//		addArray(arr3) == 0) {
//		return true;
//	} else {
//		return false;
//	}
//}

// getFactors takes a number and returns an array with all possible factors..
// of that number
function getFactors(num) {
	var factorArr = [];
	for (var i = 0; i < num; i++) {
		if (isFactor(num, i) == true) {
			factorArr.push(i);
		}
	}
	return factorArr;
}

// unit_test_getFact:
//function unit_test_getFact() {
//	var arr1 = getFactors(3);
//	var arr2 = getFactors(8);
//	if (arr1 == [1] &&
//		arr2 == [1, 2, 4]) {
//		return true;
//	} else {
//		return false;
//	}
//}

function is_amicable() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	displayInput(num1, num2);
	document.getElementById("mainForm").reset();
	var fact1 = getFactors(num1);
	var fact2 = getFactors(num2);
	showArray(fact1, 1);
	showArray(fact2, 2);
	document.getElementById("mainForm").reset();
	var sum1 = addArray(fact1);
	var sum2 = addArray(fact2);
	if ((sum1 == num2) && (sum2 == num1)) {
		document.getElementById("result").innerHTML = "Wooo! These numbers are ammicable!";
	} else {
		document.getElementById("result").innerHTML = "Oh no! These numbers aren't amicable :/";
	}
}


// Unit_test_showArr provides unit testing for the isFactor function
//function unit_test_showArr() {
//	var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
//	var arr2 = ["this", "is", "to", "test", "our", "funct"]
//	var arr3 = [0];
//	showArray(arr1);
//	showArray(arr2);
//	showArray(arr3);
//}