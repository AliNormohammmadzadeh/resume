interface Projects {
    img : string ,
    name : string,
    description: string
}

const projects = [
    {
        img: 'aipro.png',
        name: 'Image Generation',
        description: "I developed a web application using React and Tailwind for the front-end and Express, Node.js, and MongoDB for the back-end. The application integrates with an API from DALL-E, a machine learning model developed by OpenAI that generates images from textual descriptions. Users can input a textual description and generate an AI-generated image that matches the description, opening up potential applications in fields such as art, design, and marketing. Through this project, I demonstrated proficiency in full-stack development, API integration, and machine learning, showcasing my ability to create innovative solutions to complex problems.",
        url: 'https://teb-image-generator.netlify.app/'
    },
    {
        img: 'exercise.png',
        name: 'Exercise App',
        description: "I developed a web application using React and Material UI for the front-end, aimed at assisting people in their fitness and exercise routines. The application provides users with access to a wide range of exercise and fitness moves through the RapidAPI, specifically the exercisdb API. By leveraging this API, users can easily find and discover new exercises that match their needs and fitness levels. The application is intuitive and easy to navigate, making it an ideal tool for people who want to improve their physical health and fitness. Overall, this project represents a successful implementation of modern front-end development practices and API integration.",
        url: 'https://teb-exercise.netlify.app/'
    },
    {
        img: 'youtube.png',
        name: 'Youtube Clone',
        description: "I created a web application using React and Material UI, which leverages the YouTube v3 API through RapidAPI to provide users with an experience similar to YouTube, offering a vast array of video content for seamless exploration and discovery. With its intuitive design and search function, this app represents a successful implementation of modern front-end development and API integration, ideal for users looking to engage with online video content.",
        url: "https://teb-youtube.netlify.app"
    },
    
] 


export default  projects