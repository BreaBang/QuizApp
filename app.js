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
                alt: "Photo of a woman with medium length dark hair and brown eyes reading a book with a red cover on a bed with a cup of tea or coffee in a white mug.",
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
                alt: "Photo of a rock climber with his feet on a mountain edge, hands on his rope.",
                credit: "Patrick Hendry"
            }
        ]

    },
    {
        id: 2,
        text: "Who lives with you?",
        answers: [
            {
                text: "Just me.",
                image: "https://images.unsplash.com/photo-1659482633320-c6068b877e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxNVkxOWTc2RGlDQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of an asian woman with long hair smiling down at a book she is holding in one hand while sitting. She has boxed water in her other hand.",
                credit: "Boxed Water is Better"
            },
            {
                text: "Roomates.",
                image: "https://images.unsplash.com/photo-1630952588640-0204d5d48021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxNVkxOWTc2RGlDQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a group of four young black men standing in a line across the photo.",
                credit: "Kingsley Osei-Abrah"
            },
            {
                text: "Small children in the home.",
                image: "https://images.unsplash.com/photo-1655760476293-81b2b97a40b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxNVkxOWTc2RGlDQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a black/Latinx appearing man in a yellow shirt smiling while holding a black little girl with braids.",
                credit: "Sir Manuel"
            },
            {
                text: "I live with a Senior.",
                image: "https://images.unsplash.com/photo-1581579438930-a0269719fde7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxkZXJseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a senior white female washing her hands at the sink. Her grey hair is permed. Smiling.",
                credit: "CDC"
            }
        ]
    },
    {
        id: 3,
        text: "What are you most hoping to get from having a dog?",
        answers: [
            {
                text: "Netflix buddy.",
                image: "https://images.unsplash.com/photo-1567016557389-5246a1940bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291Y2h8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of Brown feet in grey sweatpants laying on a couch with a wood frame.",
                credit: "Inside Weather"
            },
            {
                text: "A weekend hiking buddy.",
                image: "https://images.unsplash.com/photo-1642826268534-9ad93257c6a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYWlsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a brown dirt trail flanked by green forest with tall trees.",
                credit: "Ronan Furuta"
            },
            {
                text: "A daily walking buddy.",
                image: "https://images.unsplash.com/photo-1616741404398-924a06f48348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of green park in the city. Green grass, tall buildings near by. People walking on the side walk trail.",
                credit: "Arpad Czapp"
            },
            {
                text: "Someone to come home.",
                image: "https://images.unsplash.com/photo-1587279763527-f245f7ccf7bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVnfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo in black and white of a woman in a black long sleeve shirt and a bun, hugging herself. Only her back is visible.",
                credit: "Hala Al-Asadi"
            }
        ]
    },
    {
    
        id: 4,
        text: "How much do you like walking?",
        answers: [
            {
                text: "Nope.",
                image: "https://images.unsplash.com/photo-1596057176846-4dfa9a53c9ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm98ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a small child with long blondish brown hair and blue eyes pointing down frowning.",
                credit: "Tomas Park"
            },
            {
                text: "I'd drive across the street.",
                image: "https://images.unsplash.com/photo-1551272997-a3232239ed4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhcmtpbmclMjBsb3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of the back half of a black sedan car next to a red parking meter.",
                credit: "Edgar Moran"
            },
            {
                text: "I love it.",
                image: "https://images.unsplash.com/photo-1609535765688-c2114a1f0e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2Fsa2luZyUyMHNob2VzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a man's legs in grey sweatpants standing in the street.",
                credit: "Dusan Jovic"
            },
            {
                text: "I prefer to run.",
                image: "https://images.unsplash.com/photo-1576751691889-568b63882cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
                alt: "Photo of a park trail with a runner in a pink shirt and black leggins running away from the camera.",
                credit: "Steven Lasrey"
            }
        ]
    }//no comma after last object
]
//Answer choices array
const answers = [
    {
        combination: ["Part-Time Away From Home", "What social life?", "Just me.","Netflix buddy.", "Nope."],
        text: "A dog age 7 and up, and certain less energetic smaller breeds would suite you.",
        image: "https://images.unsplash.com/photo-1596957901846-a0722f546502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a small brown french bull dog on the top edge of a purple sofa couch.",
        credit: "June Gathercole"
    },
    {
        combination: ["Full-Time Away From Home", "Party at my house every week.", "I live with a Senior.", "Someone to come home.", "I'd drive across the street."],
        text: "A dog age 7 and up, and certain less energetic smaller breeds would suite you.",
        image: "https://images.unsplash.com/photo-1596957901846-a0722f546502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a small brown french bull dog on the top edge of a purple sofa couch.",
        credit: "June Gathercole"
    },
    {
        combination: ["Part-Time Away From Home", "What social life?", "I live with a Senior.","Netflix buddy.", "Nope."],
        text: "A dog age 7 and up, and certain less energetic smaller breeds would suite you.",
        image: "https://images.unsplash.com/photo-1596957901846-a0722f546502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a small brown french bull dog on the top edge of a purple sofa couch.",
        credit: "June Gathercole"
    },
    {
        combination: ["Part-Time Away From Home", "What social life?", "I live with a Senior.","Netflix buddy.", "I'd drive across the street."],
        text: "A dog age 7 and up, and certain less energetic smaller breeds would suite you.",
        image: "https://images.unsplash.com/photo-1596957901846-a0722f546502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlbmNoJTIwYnVsbGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a small brown french bull dog on the top edge of a purple sofa couch.",
        credit: "June Gathercole"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "Just me.", "Someone to come home.", "I love it."],
        text: "Consider a dog 5+ years old, and a less energetic more independent breed like a Chow Chow. They make great apartment dogs because they don't bark.",
        image: "https://images.unsplash.com/photo-1603031273030-7c70317d9ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvdyUyMGNob3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo close up of the face of a sleeping red chow chow with it's eyes close.",
        credit: "Omid Armin"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "Just me.", "Someone to come home.", "I'd drive across the street."],
        text: "Consider a dog 5+ years old, and a less energetic more independent breed like a Chow Chow. They make great apartment dogs because they don't bark.",
        image: "https://images.unsplash.com/photo-1603031273030-7c70317d9ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvdyUyMGNob3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo close up of the face of a sleeping red chow chow with it's eyes close.",
        credit: "Omid Armin"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "Roomates.", "Someone to come home.", "I'd drive across the street."],
        text: "Consider a dog 5+ years old, and a less energetic more independent breed like a Chow Chow. They make great apartment dogs because they don't bark.",
        image: "https://images.unsplash.com/photo-1603031273030-7c70317d9ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvdyUyMGNob3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo close up of the face of a sleeping red chow chow with it's eyes close.",
        credit: "Omid Armin"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "Always out doing something.", "Roomates.", "Someone to come home.", "I love it."],
        text: "Consider a dog 5+ years old, and a less energetic more independent breed like a Chow Chow. They make great apartment dogs because they don't bark.",
        image: "https://images.unsplash.com/photo-1603031273030-7c70317d9ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvdyUyMGNob3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo close up of the face of a sleeping red chow chow with it's eyes close.",
        credit: "Omid Armin"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "Always out doing something.", "Roomates.", "A daily walking buddy.", "I love it."],
        text: "Consider a dog 5+ years old, and a less energetic more independent breed like a Chow Chow. They make great apartment dogs because they don't bark.",
        image: "https://images.unsplash.com/photo-1603031273030-7c70317d9ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvdyUyMGNob3d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo close up of the face of a sleeping red chow chow with it's eyes close.",
        credit: "Omid Armin"
    },
    {
        combination: ["Full-Time Away From Home", "What social life?", "A daily walking buddy.", "Small children in the home.", "I love it."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "A daily walking buddy.", "Small children in the home.", "I love it."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "A daily walking buddy.", "Just me.", "I love it."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "Someone to come home.", "Just me.", "I love it."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "A weekend hiking buddy.", "Just me.", "I love it."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "A weekend hiking buddy.", "Just me.", "I prefer to run."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Hybrid/Remote", "What social life?", "A daily walking buddy.", "Just me.", "I prefer to run."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Full-Time Away From Home", "What social life?", "A daily walking buddy.", "Just me.", "I prefer to run."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Part-Time Away From Home", "What social life?", "A daily walking buddy.", "Just me.", "I prefer to run."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
    {
        combination: ["Part-Time Hybrid/Remote", "What social life?", "A daily walking buddy.", "Just me.", "I prefer to run."],
        text: "Consider a dog 3+ years. You could go with a lively lab or pitbull or maybe an independent chow chow or akita. ",
        image: "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl0YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        alt: "Photo of a greyish blue pitbull laying on the side walk, pink tongue out. ",
        credit: "Christopher Ayme"
    },
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
        showAnswer()
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
               
            } else (!result){
                //default to first answer object
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