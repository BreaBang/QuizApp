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
                image: "https://images.unsplash.com/photo-1614419359944-62858d88a14c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFpcGVpfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of night time Taipei city street and cross walk which red and white streaks of traffic.",
                credit: "Yeh Che Wei"
            },
            {
                text: "London",
                image: "https://images.unsplash.com/photo-1587726480710-003743795e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of London city, a red bus on the street and historical building in the background.",
                credit: "Arlinda"
            },
            {
                text: "Mexico City",
                image: "https://images.unsplash.com/photo-1452838269443-c86e6a3134f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWV4aWNvJTIwY2l0eXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of mexico city scape. Daytime. Blue sky.",
                credit: "Alexis Tostada"
            },
            {
                text: "Lagos",
                image: "https://images.unsplash.com/photo-1532085755448-a67fd3b518b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFnb3MlMjBjaXR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of Lagos city scape at night with white and blue soft lights.",
                credit: "Ciarran O'Brien"
            }
        ]
    },
    {
        id: 1,
        text: "Choose a dessert",
        answers: [
            {
                text: "Cake",
                image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of white frosted cake with four layers colored purple, oragne, yellow and puruple and fondant stars on-top.",
                credit: "Annie Spratt"
            },
            {
                text: "Tart",
                image: "https://images.unsplash.com/photo-1578294178279-bb0fac077249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFydHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a blueberry tart with a yellow custard.",
                credit: "Raphael Maksian"
            },
            {
                text: "Pie",
                image: "https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGllfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of an apple pie with a lattice top.",
                credit: "Danil Aksenov"
            },
            {
                text: "Cookie",
                image: "https://images.unsplash.com/photo-1449049607083-e29383d58423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2llfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a box of cookies with jam in the middle.",
                credit: "Tanaphong Toochinda"
            }
        ]

    },
    {
        id: 2,
        text: "Choose a dog.",
        answers: [
            {
                text: "Chow Chow",
                image: "https://images.unsplash.com/photo-1603031273030-7c70317d9ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNob3clMjBjaG93JTIwZG9nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo close up of a brown chow chow sleeping.",
                credit: "Omid Arman"
            },
            {
                text: "English Bulldog",
                image: "https://images.unsplash.com/photo-1522260448087-a56a0fd5282e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGJ1bGxkb2d8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a brown and white english bulldog standing up looking to the side of the camera.",
                credit: "Bryan Hanson"
            },
            {
                text: "Lab",
                image: "https://images.unsplash.com/photo-1638472495784-a7171c2f5f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhYnJhZG9yfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a black lab in a field walking towards the camera with a yellow frisbee.",
                credit: "Ilka Lünstäden"
            },
            {
                text: "Pit Bull",
                image: "https://images.unsplash.com/photo-1608754786631-b8c2a9b4ecaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
                alt: "Photo of two blackish brown pitbulls sitting on a chair in christmas sweaters looking at the camera.",
                credit: "Sandra Seitamaa"
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