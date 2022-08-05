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
                credit: "Bimo Luki, Unsplash"
            },
            {
                text: "Full-Time Away From Home",
                image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of lab technician processing samples and other masked people in PPE working behind her.",
                credit: "Jason Goodman, Unsplash"
            },
            {
                text: "Part-Time Hybrid/Remote",
                image: "https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
                alt: "Photo of a row of empty cubiles with green walls and black empty chairs.",
                credit: "Kate Sade, Unsplash"
            },
            {
                text: "Full-Time Hybrid/Remote",
                image: "https://images.unsplash.com/photo-1600195075976-6c1d19c956d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of an Asian woman with long black hair and a silver sweater, working on a silver laptop while sitting on a queen-sized bed surrounded by books.",
                credit: "Windows, Unsplash"
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
                credit: "Marga Santoso, Unsplash"
            },
            {
                text: "Party at my house every week.",
                image: "https://images.unsplash.com/photo-1642009189383-56dc22a2862d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvYXJkJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "A photo of four people's hands and legs at a coffee table with a game called Color Brain, game cards and note paper on the table.",
                credit: "Big Potatoe, Unsplash"
            },
            {
                text: "Always out doing something.",
                image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a yoga class. Students have one knee on the ground in low-lunge and their arms spread out, parrallel to the ground in a twist.",
                credit: "Dylan Gillin, Unsplash"
            },
            {
                text: "Always outdoors.",
                image: "https://images.unsplash.com/photo-1586627161720-ee2849303aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMGNsaW1iaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Rock climber with his feet on a mountain edge, hands on his rope.",
                credit: "Patrick Hendry, Unsplash"
            }
        ]

    },
    {
        id: 3,
        text: "What is your home life life?",
        answers: [
            {
                text: "Just me.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Roomates",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Small children in the home.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "I live with teens.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            }
        ]
    },
    {
        id: 4,
        text: "What are you most hoping to get from having a dog?",
        answers: [
            {
                text: "A couch buddy.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "A weekend hiking buddy.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "A daily walking buddy.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "Someone to come home",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            }
        ]
    },
    {
    
        id: 5,
        text: "How much do you like walking? (Remember you will be walking the dog 3-4 times a day if you don't have a yard.)",
        answers: [
            {
                text: "Nope.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "I park as close as possible to entrances wherever I go.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "I love it.",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
            },
            {
                text: "I prefer to run, but walking is okay....",
                image: "https://images.unsplash.com/photo-1543093722-910eed00085f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNob3clMjBjaG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the Empire State building during daytime",
                credit: "Canva"
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

        const answerTitle = document.createElement('h3')
        answerTitle.textContent = answer.text
        
        const answerInfo = document.createElement('p')
        const imageLink = document.createElement('a')
        imageLink.setAttribute('href', answer.credit)
        imageLink.textContent = answer.credit
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
