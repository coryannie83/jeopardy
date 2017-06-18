(function() {

  $(function() {

    let category = $('#category'); //category of question
    let value = $('#value');
    let question = $('#question');
    let guess = $('#guessinput');
    let finding = $('#finding');
    let submitButton = $('#submit');
    let hiddenAnswer;
    let score = $('#score');

    //---------on screen load-------------//

    //declare result as a variable

    let result = $.get("http://jservice.io/api/random");

    //---???? how can i streamline and consolidate results??
    result.done(function(data) {
      $(category).html(data[0].category.title);
      $(value).html(data[0].value);
      $(question).html(data[0].question);
       hiddenAnswer = data[0].answer;
      console.log(data);
    });


    //-----user submits answer and sys responds ----//

    //check user's answer
    submitButton.click(function() {
      //system determines if user's answer matches answer from api call
      if (hiddenAnswer == guess.val()) {
        finding.html("Correct!"); //ui displays result
        //add current score to correct question value to display new score
        var newScore = parseInt(value.html()) + parseInt(score.html());
        score.html(newScore);
      } else {
        finding.html("Incorrect"); //ui displays result and current score is unchanged
      }
    });

    //-------reset screen - clear input and load new question----//

    let resetButton = $('#reset');
    resetButton.click(function() {
      console.log("clicked");
      finding.html("");
      guess.val("");

      let newResult = $.get("http://jservice.io/api/random");


      newResult.done(function(data) {
        $(category).html(data[0].category.title);
        $(value).html(data[0].value);
        $(question).html(data[0].question);
        $(question).html(data[0].question);
        console.log(data);
      });
  });
  });

})();
