const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

//The quiz questions and answers as objects within an array stored in a variable. The answers are arrays within an object within an array.
const questions = [
    {
        id: 0, //question ID
        text: "What is your work schedule like?", //Question text
        answers: [ //answer options as objects in an array
            {
                text: "Part-Time Away From Home",
                image: "https://images.unsplash.com/photo-1511421616335-5a9846f1afcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
                alt: "Close up photo of a brown hands carrying a tray of food containing an organge drink in a clear glass, a hamburger and a basket of fries.",
                credit: "Bimo Luki"
            },
            {
                text: "Full-Time Away From Home",
                image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of lab technician processing samples and other masked people in PPE working behind her.",
                credit: "Jason Goodman"
            },
            {
                text: "Part-Time Hybrid/Remote",
                image: "https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
                alt: "Photo of a row of empty cubiles with green walls and black empty chairs.",
                credit: "Kate Sade"
            },
            {
                text: "Full-Time Hybrid/Remote",
                image: "https://images.unsplash.com/photo-1600195075976-6c1d19c956d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of an Asian woman with long black hair and a silver sweater, working on a silver laptop while sitting on a queen-sized bed surrounded by books.",
                credit: "Windows"
            }
        ]
    },
    {
        id: 1,
        text: "What is your social life like?",
        answers: [
            {
                text: "What social life?",
                image: "https://images.unsplash.com/photo-1611668971858-6c9ccc3ccb5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdWNoJTIwcmVhZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "woman with medium length dark hair and brown eyes reading a book with a red cover on a bed with a cup of tea or coffee in a white mug.",
                credit: "Marga Santoso"
            },
            {
                text: "Party at my house every week.",
                image: "https://images.unsplash.com/photo-1642009189383-56dc22a2862d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvYXJkJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "A photo of four people's hands and legs at a coffee table with a game called Color Brain, game cards and note paper on the table.",
                credit: "Big Potatoe"
            },
            {
                text: "Always out doing something.",
                image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a yoga class. Students have one knee on the ground in low-lunge and their arms spread out, parrallel to the ground in a twist.",
                credit: "Dylan Gillin"
            },
            {
                text: "Always outdoors.",
                image: "https://images.unsplash.com/photo-1586627161720-ee2849303aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMGNsaW1iaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Rock climber with his feet on a mountain edge, hands on his rope.",
                credit: "Patrick Hendry"
            }
        ]

    },
    {
        id: 3,
        text: "Who lives with you?",
        answers: [
            {
                text: "Just me.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Roomates",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Small children in the home.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "I live with teens.",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    },
    {
        id: 4,
        text: "What are you most hoping to get from having a dog?",
        answers: [
            {
                text: "A couch buddy.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "A weekend hiking buddy.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "A daily walking buddy.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "Someone to come home",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    },
    {
    
        id: 5,
        text: "How much do you like walking? (Remember you will be walking the dog 3-4 times a day if you don't have a yard.)",
        answers: [
            {
                text: "Nope.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "I park as close as possible to entrances wherever I go.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "I love it.",
                image: "",
                alt: "",
                credit: ""
            },
            {
                text: "I prefer to run, but walking is okay....",
                image: "",
                alt: "",
                credit: ""
            }
        ]
    }//no comma after last object
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

        const answerTitle = document.createElement('h3') //creates the h3 title
        answerTitle.textContent = answer.text //uses the text property from the object
        
        const answerInfo = document.createElement('p') //creates the p element to display credit
        const imageLink = document.createElement('a') //creates a link for the image in the credits
        imageLink.setAttribute('href', answer.credit) 
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

const handleClick = () => {
    console.log('clicked')
}
