
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';

let chat: Chat | null = null;

const portfolioData = `
Name: João Silva (hypothetical name)
Tagline: Data Analyst turned Developer. Passionate about building beautiful, functional web applications.
About: I'm a detail-oriented professional making a career transition from Data Analysis to Software Development. My background in data gives me a unique perspective on problem-solving and a strong foundation in logic and analytics. I'm passionate about learning new technologies and applying my skills to create user-friendly solutions.
Skills:
- Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express, Python
- Databases: SQL (PostgreSQL), NoSQL (MongoDB)
- Data/ML: Pandas, Scikit-learn, Jupyter Notebooks
- Tools: Git, GitHub, Docker, VS Code, REST APIs
Experience:
- Data Analyst at Tech Solutions Inc. (2020-2023): Analyzed large datasets to extract actionable insights, created dashboards, and automated reporting processes. Honed my skills in Python and SQL.
Projects:
1. Project 'Insight Dash': A dynamic data visualization dashboard built with React and D3.js. It allows users to upload CSVs and generate interactive charts. This project showcases the bridge between my data analysis and development skills.
2. Project 'CodeConnect': A full-stack social media platform for developers. Features user authentication, posts, comments, and a real-time chat. Built with the MERN stack (MongoDB, Express, React, Node.js).
3. Project 'Portfolio AI': The portfolio website itself, featuring this interactive AI assistant powered by the Gemini API.
Contact:
- Email: joao.silva.dev@email.com
- LinkedIn: linkedin.com/in/joaosilvadev
- GitHub: github.com/joaosilvadev
`;


const getChat = (): Chat => {
    if (!chat) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are a professional, friendly, and helpful AI assistant for João Silva, a developer transitioning from a data analyst role. Your goal is to answer questions about his skills, projects, and experience based *only* on the information provided below. Be concise and encouraging. If a question is outside of this scope, politely state that you can only answer questions about João's portfolio. Here is the portfolio information: ${portfolioData}`,
            },
        });
    }
    return chat;
}

export const getChatbotResponse = async (message: string): Promise<string> => {
    try {
        const chatInstance = getChat();
        const response = await chatInstance.sendMessage({ message });
        
        if (!response.text) {
             return "I'm sorry, I couldn't generate a response. Please try again.";
        }
        return response.text;
    } catch (error) {
        console.error("Error getting response from Gemini:", error);
        return "Sorry, something went wrong while connecting to the AI. Please check the API key and try again.";
    }
};
