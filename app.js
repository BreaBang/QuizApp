const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

//The quiz questions and answers as objects within an array stored in a variable. The answers are arrays within an object within an array.
const questions = [
    {
        id: 0, //question ID
        text: "Pick a vacation destination:", //Question text
        answers: [ //answer options as objects in an array
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Japan",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "China",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "London",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
        ]
    },
    {
        id: 1,
        text: "Pick color:",
        answers: [
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            }
        ]

    },
    {
        id: 3,
        text: "Pick some food:",
        answers: [
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/photo-1605463457051-4837eb3f48cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvdyUyMGNob3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            }//no comma after last object
        ]
    }
]

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div') //for each question we are creating a div.
        titleBlock.id=question.id //giving the div the id of question.id
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

       question.answers.forEach(answer => {
        const answerBlock = document.createElement('div')
        answerBlock.classList.add('answer-block')
        answerBlock.addEventListener('click', () => handleClick)
        const answerImage = document.createElement('img')
        answerImage.setAttribute('src', answer.image)
        answerImage.setAttribute('alt', answer.alt)

        const answerTitle = document.createElement('h3')
        answerTitle.textContent = answer.text
        
        const answerInfo = document.createElement('p')
        const imageLink = document.createElement('a')
        imageLink.setAttribute('href', answer.credit)
        const sourceLink = document.createElement('a')
        sourceLink.textContent = 'Canva'
        sourceLink.setAttribute('src', 'https://unsplash.com/s/photos/chow-chow')
        answerInfo.append(imageLink, ' to ', sourceLink)

        answerBlock.append(answerImage, answerTitle, answerInfo)

        answersBlock.append(answerBlock)
       })
       questionDisplay.append(answersBlock)
    })
}

populateQuestions() //calling the function so the new divs will show on the page

const handleClick = () => {
    console.log('clicked')
}
