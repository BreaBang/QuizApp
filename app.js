const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

//The quiz questions and answers as objects within an array stored in a variable. The answers are arrays within an object within an array.
const questions = [
    {
        id: 0, //question ID
        text: "Choose a city.", //Question text
        answers: [ //answer options as objects in an array
            {
                text: "Taipei",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "London",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Mexico City",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Lagos",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    },
    {
        id: 1,
        text: "Choose a dessert",
        answers: [
            {
                text: "Cake",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Tart",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Pie",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Cookie",
                image: "",
                alt: "",
                credit: ""
            }
        ]

    },
    {
        id: 2,
        text: "Choose a dog.",
        answers: [
            {
                text: "Chow Chow",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "English Bulldog",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Lab",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Pit Bull",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    },
    {
        id: 3,
        text: "Choose a scenery.",
        answers: [
            {
                text: "Winter Wonderland",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Forest",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Beach",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Mountains",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    },
    {
    
        id: 4,
        text: "Choose a flower.",
        answers: [
            {
                text: "Rose",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Tulip",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Sunflower",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Daisy",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    }//no comma after last object
]
//Answer choices array
const answers = [
    {
        combination: ["Taipei", "Tart", "Chow Chow", "Winter Wonderland", "Rose"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Taipei", "Cake", "English Bulldog", "Mountains", "Tulip"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Taipei", "Pie", "Lab", "Forest", "Daisy"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Taipei", "Cookie", "Pit Bull", "Beach", "Sunflower"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["London", "Tart", "Chow Chow", "Winter Wonderland", "Rose"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["London", "Cake", "English Bulldog", "Mountains", "Tulip"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["London", "Pie", "Lab", "Forest", "Daisy"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["London", "Cookie","Pit Bull", "Beach", "Sunflower"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Mexico City", "Tart", "Chow Chow", "Winter Wonderland", "Rose"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Mexico City", "Cake", "English Bulldog", "Mountains", "Tulip"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Mexico City", "Pie", "Lab", "Forest", "Daisy"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Mexico City", "Cookie", "Pit Bull", "Beach", "Sunflower", ],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Lagos", "Tart","Chow Chow", "Winter Wonderland", "Rose"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Lagos", "Pie", "English Bulldog", "Mountains", "Tulip"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Lagos", "Tart", "Lab", "Forest", "Daisy"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    },
    {
        combination: ["Lagos", "Cookie", "Pit Bull", "Beach", "Sunflower"],
        text: "",
        image: "",
        alt: "",
        credit: ""
    }
  
]
//empty array to hold the unanswered questions
const unansweredQuestions = []
//empty array to hold chosen answers once clicked
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div') //for each question we are creating a div.
        titleBlock.id = question.id //giving the div the id of question.id
        titleBlock.classList.add('title-block') //giving each div the class title-block
        
        //adding h2 question title text
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text

        titleBlock.append(titleHeading) //inserts the questions into the divs
        questionDisplay.append(titleBlock) //insert required content at position end of the specific selected elements. 
        
        
    //answer block section
       const answersBlock = document.createElement('div')
       answersBlock.id = question.id + "-questions"
       answersBlock.classList.add('answer-options')

       //When we create the questions, they will go in the unanswered array.
       unansweredQuestions.push(question.id)

       question.answers.forEach(answer => {
        const answerBlock = document.createElement('div')
        answerBlock.classList.add('answer-block')
        answerBlock.addEventListener('click', () => handleClick (question.id, answer.text) ) //clicking will pass through the question.id and answer.text here 
        const answerImage = document.createElement('img')
        answerImage.setAttribute('src', answer.image)
        answerImage.setAttribute('alt', answer.alt)

        const answerTitle = document.createElement('h3') //creates the h3 title
        answerTitle.textContent = answer.text //uses the text property from the object
        
        const answerInfo = document.createElement('p') //creates the p element to display credit
        const imageLink = document.createElement('a') //creates a link for the image in the credits
        imageLink.setAttribute('href', answer.image) 
        imageLink.textContent = answer.credit //tells where to get the text for the credits
        const sourceLink = document.createElement('a') //creates a link for the credit text
        sourceLink.textContent = 'Unsplash'
        sourceLink.setAttribute('src', 'https://unsplash.com/') //
        answerInfo.append(imageLink, ' from ', sourceLink)

        answerBlock.append(answerImage, answerTitle, answerInfo) // makes is show in the browser.

        answersBlock.append(answerBlock) //makes is show in the browser.
       })
       questionDisplay.append(answersBlock) //makes is show in the browser.
    })
}

populateQuestions() //calling the function so the new divs will show on the page

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))//say we click on question id 0, we click on something there, the code goes, it's included. We can remove it from unanswered questions
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)
    //remove something from teh array based on the answer//remove something from teh array based on the answer
    if (itemToRemove > -1){
        unansweredQuestions.splice(itemToRemove, 1) //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestquestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestquestionId

    if (!unansweredQuestions.length){
        location.href = '#answer'
        showAnswer()
    
        //scroll to answer div
        
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if(
            chosenAnswers.includes(answer.combination[0])+
            chosenAnswers.includes(answer.combination[1])+
            chosenAnswers.includes(answer.combination[2])+
            chosenAnswers.includes(answer.combination[3])+
            chosenAnswers.includes(answer.combination[4])+
            chosenAnswers.includes(answer.combination[5])
            
         ) {
                result = answer
               
            } else if (!result) {                //default to first answer object
                result = answers[0]
            }
    })
   
    //result block
    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    //answer result block

    answerBlock.append(answerTitle, answerImage)
    answerDisplay.append(answerBlock)


    
    //disable other clicking
    const allAnswerBlocks =document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
   const currentQuestionBlock = document.getElementById(questionId + "-questions")

   Array.from(currentQuestionBlock.children).forEach(block => {
    if (block.children.item(1).innerText != chosenAnswer) {
        block.style.opacity = "50%"
    }
   })

}