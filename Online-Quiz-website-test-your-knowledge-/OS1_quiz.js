// quiz_utils.js
const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
async function sendQuizScore(email, score) {
  try {
      const response = await fetch('http://localhost:4001/user/saveQuizScore', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email,score })
      });

      const data = await response.json();
      if (response.ok) {
          console.log('Score submitted successfully:', data);
          alert('Score submitted successfully');
      } else {
          console.error('Error submitting score:', data);
          alert(data.message || 'Failed to submit score');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
  }
}

(function() {
    var questions = [{
      question: "What is operating system?",
      choices: ["collection of programs that manages hardware resources", "System service provider to the application programs", "link to interface the hardware and application programs","all of the mentioned"],
      correctAnswer: 3
    }, {
      question: "To access the services of operating system, the interface is provided by the ___________",
      choices: ["System calls", "API", "Library", "Assembly instructions"],
      correctAnswer: 0
    }, {
      question: "Which one of the following is not true?",
      choices: ["kernel is the program that constitutes the central core of the operating system", " kernel is the first part of operating system to load into memory during booting","kernel is made of various modules which can not be loaded in running operating system ","kernel remains in the memory during the entire computer session"],
      correctAnswer: 2
    }, {
      question: "Which one of the following error will be handle by the operating system?",
      choices: ["power failure", "lack of paper in printer", "connection failure in the network", "all of the mentioned"],
      correctAnswer: 3
    }, {
      question: "By operating system, the resource management can be done via _________",
      choices: ["time division multiplexing","space division multiplexing","time and space division multiplexing","none of the mentioned"],
      correctAnswer: 2
    }];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('You got ' + numCorrect + ' questions out of ' +
                   questions.length + ' right!!!');
      sendQuizScore(loggedInUserEmail, numCorrect);
      return score;
    }
  })();