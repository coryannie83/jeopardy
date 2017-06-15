(function() {

  $(function() {

    let category = $('#category'); //category of question
    let value = $('#value');
    let question = $('#question');
    //let answer = $('#answer');
    let guess = $('#guessinput');
    let finding = $('#finding');
    let submitButton = $('#submit');
    let hiddenAnswer;
    let score = $('#score');

    //---------on screen load-------------//
    //pull data back
    let result = $.get("http://jservice.io/api/random");

    //---???? how can i streamline and consolidate results??
    result.done(function(data) {
      $(category).html(data[0].category.title);
        //console.log(data);
    });

    //dollar value
    result.done(function(data) {
      $(value).html(data[0].value);
    //  console.log(data);
    });

    //question
    result.done(function(data) {
      $(question).html(data[0].question);
      //console.log(data);
    });

    //answer
    //need to hide until user clicks submit button
    result.done(function(data) {
      //   $(answer).html(data[0].answer);
      hiddenAnswer = data[0].answer;
      console.log(data);

    });


    //-----user submits answer and sys responds ----//

    //check user's answer
    submitButton.click(function() {

      if (hiddenAnswer == guess.val()) {
        finding.html("Correct!");
        var newScore = parseInt(value.html()) + parseInt(score.html());
        score.html(newScore);

      } else {
        finding.html("Incorrect");
      }
    });

    //-------reset screen - clear input and load new question----//

    //--???  this is clumsy, how can i streamline?--//

    let resetButton = $('#reset');
    resetButton.click(function() {
      console.log("clicked");
      finding.html("");
      guess.val("");

      let newResult = $.get("http://jservice.io/api/random");

      newResult.done(function(data) {
        $(category).html(data[0].category.title);
      });

      newResult.done(function(data) {
        $(value).html(data[0].value);
      });

      newResult.done(function(data) {
        $(question).html(data[0].question);
      });

      newResult.done(function(data) {
        //   $(answer).html(data[0].answer);
        hiddenAnswer = data[0].answer;
        console.log(data);
      });

    });

  });


})();
