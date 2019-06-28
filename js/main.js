function checkScore() {
    var answer1 = document.querySelector('input[name="answer1"]:checked').value;
    var answer2 = document.querySelector('input[name="answer2"]:checked').value;
    var answer3 = document.querySelector('input[name="answer3"]:checked').value;
    var score = 0;
    //to validate radio buttons
    var radioButtonOne = document.querySelector('input[name="answer1"]').checked==false;
    var radioButtonTwo = document.querySelector('input[name="answer2"]').checked==false;
    var radioButtonThree = document.querySelector('input[name="answer3"]').checked==false;
    var win = document.getElementById("win");
        //Validation check

        /*Convert the input to lower case before checking against answer*/
        /*Increase score everytime the answer is right*/
        if (answer1.toLowerCase() === "trump") {
            score++;
        }
        if (answer2.toLowerCase() === "equatorial guinea") {
            score++;
        }
        if (answer3.toLowerCase() === "kenya") {
            score++;
        }
        //create h2 element to display feedback to the user
        document.getElementById('isBlank').style.visibility = "hidden";
        var feedbackText = document.createElement('h2');
        feedbackText.innerHTML = "You got " +
            score + " correct";
        //to format
        feedbackText.style.color = "green";
        //add to feedback div and set visibility to visible
        var feedbackDiv = document.getElementById('feedback');
        if (score === 3) {
            feedbackDiv.style.boxShadow = "2px 2px 2px 2px green";
            win.setAttribute("src","https://media.giphy.com/media/ddHhhUBn25cuQ/giphy.gif");
        }

        if (score === 2) {
            feedbackDiv.style.boxShadow = "2px 2px 2px 2px lime";
            feedbackText.style.color = "lime";
            win.setAttribute("src","https://media.giphy.com/media/kigLtfDrV3K9N0wYCO/giphy.gif");
        }
        if (score === 1) {
            feedbackDiv.style.boxShadow = "2px 2px 2px 2px orange";
            feedbackText.style.color = "orange";
            win.setAttribute("src","https://media.giphy.com/media/26xBKqeFFspRZjDTW/giphy.gif");
        }
        
        if (score === 0) {
            feedbackDiv.style.boxShadow = "2px 2px 2px 2px red";
            feedbackText.style.color = "red"; win.setAttribute("src","https://media.giphy.com/media/nzZUoOgXGm4yA/giphy.gif");
        }
        feedbackDiv.appendChild(feedbackText);

        feedbackDiv.style.display = "block";
        //to clear form data
        document.getElementById("quizForm").reset();

    

}
