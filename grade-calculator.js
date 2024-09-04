function calculateGrades() {
	//Getting Score IDs in an array
    var scores = [
        document.getElementById("score1").value,
        document.getElementById("score2").value,
        document.getElementById("score3").value,
        document.getElementById("score4").value
    ];

    var total = 0;
	
	//Calculating total
    for (var i = 0; i < scores.length; i++) {
        total += Number(scores[i]);
    }
    
	//Calculating and displaying average
    var average = total / scores.length;

    document.getElementById("averageScore").value = average.toFixed(2);
	
	//Getting grade ID names in an array
    var gradeIds = ["grade1", "grade2", "grade3", "grade4"];

	//Calculating and displaying grades
    for (var i = 0; i < scores.length; i++) {
        var score = Number(scores[i]); 
		
		//Getting grade IDs 
        var gradeInput = document.getElementById(gradeIds[i]);

        if (score >= 90) {
            gradeInput.value = 'A';
        } else if (score >= 80) {
            gradeInput.value = 'B';
        } else if (score >= 70) {
            gradeInput.value = 'C';
        } else if (score >= 65) {
            gradeInput.value = 'D';
        } else {
            gradeInput.value = 'F';
        }
    }
}