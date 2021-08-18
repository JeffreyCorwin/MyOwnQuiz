class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("User");
   //Create a input box to enter the number
   this.input2 = createInput("1234");

    this.message6 = createElement("h2");

   this.button = createButton('Submit');
   this.button2 = createButton('Submit');

   this.b = createButton('view Answer');
   this.b2 = createButton('view Answer');

   this.Q2 = createButton('go to next question');
   this.Q22 = createButton('end quiz');

   this.w = createImg("WhiteHat.png");
   this.by = createImg("Byjus.jpg");

    this.Question2 = createElement("h3");

    this.answer12 = createElement('h4');
    this.answer22 = createElement('h4');
    this.answer32 = createElement('h4');
    this.answer42 = createElement('h4');
    this.answer52 = createElement('h4');

    this.button3 = createButton('view explanation');
    this.button32 = createButton('view explanation');

    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement("h3");
    this.answer1 = createElement('h4');
    this.answer2 = createElement('h4');
    this.answer3 = createElement('h4');
    this.answer4 = createElement('h4');
    this.answer5 = createElement('h4');


    this.message = createElement("h2");
    this.message2 = createElement("h2");
    this.message3 = createElement("h2");
    this.message4 = createElement("h2");
    this.message5 = createElement("h2");
    
    
    
    
    
    
    this.messages = createElement("h3")
  }

  hide(){
    this.title.hide();
    this.input1.hide();

    this.button.hide();
   
    this.message.hide();
    this.message2.hide();
    this.message3.hide();

    this.Question2.hide();

    this.answer12.hide();
    this.answer22,hide();
    this.answer32.hide();
    this.answer42.hide();
    this.answer52.hide();


    this.message4.hide();
    this.message5.hide();

    this.Q2.hide();

    this.message6.hide();

    this.b.hide();

    this.button3.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();

    this.Question.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();
    this.answer5.hide();


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.Question.html("What is the last letter in alphabets ?");
    this.Question.position(100, 50);

    this.message6.position(154230, 253)

    this.answer1.html("1:s");
    this.answer1.position(100, 75);

    this.answer2.html("2:z");
    this.answer2.position(100, 100);

    this.answer3.html("3:a");
    this.answer3.position(100, 125);

    this.b.position(150, 905);

    this.answer4.html("4:g");
    this.answer4.position(100, 150);

    this.answer5.html("5:other letter");
    this.answer5.position(100, 175);

    this.b2.position(3000, 900)

    this.Question2.html("What is the last letter in alphabets ?");
    this.Question2.position(1000000, 50000);

    this.answer12.html("1:s");
    this.answer12.position(10000, 705);

    this.answer22.html("2:z");
    this.answer22.position(1000, 1000);

    this.answer32.html("3:a");
    this.answer32.position(1000, 1205);

    this.w.position(45345, 7870);

    this.answer42.html("4:g");
    this.answer42.position(1000, 1050);

    this.answer52.html("5:other letter");
    this.answer52.position(1000, 1705);

    //Create html() and position() for each question, input and answers.

    this.Q22.position(808980, 809809)
    this.input2.position(450, 230)

    this.by.position(4242, 3424);

    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.button2.position(2900, 3000);

    this.button3.position(890, 900);

    this.Q2.position(890, 789);

    // Add a mousepressed action when the button is clicked Display the this.message
    
    this.button32.position(23434, 45345);

    this.messages.position(734967, 745849);

    this.button.mousePressed(()=>{
      this.input1.position(4443, 900)
      this.input2.position(4443, 900);
      this.message.html(`${this.input1.value()} do you want to see next 
      </br> question or answer for this question`);
      this.message.position(100, 300);
      this.b.position(150, 375);
      this.Q2.position(400, 375)
    });

    /*this.button.mousePressed(()=>{
      this.input1.position(4443, 900)
      this.input2.position
      this.message.html(`Thank You ${this.input1.value()}. Your Forms has been submited`);
      this.message.position(150, 325);
      this.b.position(150, 375);
    });*/

    this.b.mousePressed(()=>{
      this.message.hide();
      this.message2.html(`The answer is 3(s)`);
      this.message2.position(150, 325);
      this.b.hide();
      this.button3.position(150, 375);

    });

    this.button3.mousePressed(()=>{
      this.message2.hide();
      this.button3.hide();
      this.message3.html(`Since, the last letter in "alphabets" is s    i.e. s is the answer`);
      this.message3.position(50, 325);
      this.Q2.position(150, 375)
    })

    this.Q2.mousePressed(()=>{
      this.input2.position(150, 230);
      this.message.position(909, 909);
      this.b.hide();
      this.button3.hide();
      this.message2.hide();
      this.message3.hide();
      this.Question.hide();
      this.answer1.hide();
      this.button.hide();
      this.answer2.hide();
      this.answer3.hide();
      this.answer4.hide();
      this.answer5.hide();
      this.Q2.hide();

      this.button2.position(290, 300)

      this.Question2.html("What is not a programing language ?");
      this.Question2.position(100, 50);
  
      this.answer12.html("1:java");
      this.answer12.position(100, 75);
  
      this.answer22.html("2:css");
      this.answer22.position(100, 100);
  
      this.answer32.html("3:scratch");
      this.answer32.position(100, 125);
  
      this.answer42.html("4:asan");
      this.answer42.position(100, 150);
  
      this.answer52.html("5:PHP");
      this.answer52.position(100, 175);
    });

    this.button2.mousePressed(()=>{
      this.input2.position(4443, 900);
      this.message6.html(`${this.input1.value()} do you want to see next 
      </br> question or answer for this question`);
      this.message6.position(100, 300);
      this.b2.position(150, 375);
      this.Q22.position(400, 375)
    });

    this.b2.mousePressed(()=>{
      this.message6.hide();
      this.message.hide();
      this.message4.html(`The answer is 3(scratch)`);
      this.message4.position(150, 325);
      this.b2.hide();
      this.button32.position(150, 375);
    })

    this.button32.mousePressed(()=>{
      this.message5.html(`scratch is programing platform and the rest are languages`);
      this.message4.hide();
      this.message5.position(150, 325);
      this.button32.hide();
      this.Q22.position(150, 375);
    });

    this.Q22.mousePressed(()=>{

    this.title.hide();
    this.input1.hide();

    this.button.hide();
   
    this.message.hide();
    this.message2.hide();
    this.message3.hide();


    this.Question2.hide();

    this.answer12.hide();
    this.answer22.hide();
    this.answer32.hide();
    this.answer42.hide();
    this.answer52.hide();


    this.message4.hide();
    this.message5.hide();

    this.Q2.hide();

    

    this.message6.hide();

    this.b.hide();

    this.button3.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();

    this.Question.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();
    this.answer5.hide();

    this.Q22.hide();
    this.b2.hide();
    this.button2.hide();
    this.button32.hide();

    this.messages.html(`codding learnt fron : WhiteHatjr/ByjusFutureSchool
    </br> coding teacher      : Mrs.Supriya
    </br> Project No.         : 36
    </br> special Thanks to  Mrs.Spuriya for teaching me coding
                 She is The best teacher`);

                 this.messages.position(100, 10)
                 this.w.position(100, 150);
                 this.by.position(450, 150);

    });
  }
}
