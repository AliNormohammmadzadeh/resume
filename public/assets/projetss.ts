interface Item {
    img_main: string,
    name: string,
    img_three: string[],
    sumarry: string[] 
}

const projetss = [
    {
        img_main: 'frontend.png',
        name: 'Front-end',
        img_three: [
            {
                img: 'react.png'
            },
            {
                img: 'redux.png'
            },
            {
                img:'next.png'
            },
            {
                img: 'tailwind1.png'
            }
        ],
        sumarry : [
            {
                text: 'uses React as the front-end framework to build dynamic user interfaces.'
            },
            {
                text: 'Redux is integrated to manage state and data flow in the application.'
            },
            {
                text: 'TypeScript is used to add static typing and improve maintainability of the codebase.'
            },
            {
                text: 'Tailwind CSS provides modern styling for components.'
            },
        ],
        years: 1
    },
    {
        img_main: 'backend.png',
        name: 'Back-end',
        img_three: [
            {
                img: 'express.png'
            },
            {
                img: 'nodejs.png'
            },
            {
                img: 'database.png'
            }
        ],
        sumarry : [
            {
                text: 'Node.js is being used as the backend environment to run JavaScript on the server-side.'
            },
            {
                text: 'Express.js is integrated to handle HTTP requests, routing and middleware.'
            },
            {
                text: "The database used could either be SQL (mysql , postgresql) or NoSQL (mongodb , Neo4j), depending on the project's requirements."
            },
            {
                text: 'npm is used to manage and install the dependencies required for the project.'
            },
        ],
        years: 1
    },
    {
        img_main: 'artificial-intelligence.png',
        name: 'Artificial intelligence',
        img_three: [
            {
                img: 'numpy.png'
            },
            {
                img: 'pandas.png'
            },
            {
                img: 'opencv.png'
            },
            {
                img:'scikit-learn.png'
            }
        ],
        sumarry : [
            {
                text: 'The project is focused on Python and utilizes the libraries for Machine Learning and Deep Learning.'
            },
            {
                text: 'Pandas, Numpy, and Matplotlib are used for data manipulation, analysis, and visualization.'
            },
            {
                text: 'Scikit-learn and Tensorflow provide machine learning algorithms, while NLTK is used for Natural Language Processing tasks.'
            },
            {
                text: 'OpenCV is utilized for computer vision tasks such as image and video processing.'
            },
        ],
        years: 1.2
    },
]

export default projetss