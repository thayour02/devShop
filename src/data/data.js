// import { image } from "framer-motion/client"
import img from "../assets/cov.jpg"
import img1 from "../assets/dis.jpg"
import img2 from '../assets/deploy.jpg'
import img3 from "../assets/plan.jpg"
import img4 from "../assets/dev.jpg"
import img5 from "../assets/main.jpg"
import com from '../assets/e-com.jpg'
import pos from '../assets/pos.jpg'
import mob from '../assets/mob.jpg'
import arr from '../assets/var.jpg'
import pro from '../assets/pro.jpg'
import web from '../assets/web.jpg'
import profile from '../assets/profile.png'

export const serve =[
    {id:1, title:"E-commerce", dec:"Our proven eCommerce platform, trusted across industries with millions in transactions, offers secure payment gateways, efficient inventory management, scalable architecture, and mobile-responsive designs, ensuring a seamless and reliable digital sales experience.",image:com},
    {id:2, title:"Point of Sale",image:pos, dec:"Streamline your retail operations with our cutting-edge POS solutions, featuring:User-friendly interfaces, Real-time inventory tracking, Secure payment processing, Sales analytics and reporting,Integration with existing systems.Enhance customer satisfaction and optimize your business workflow."},
    {id:3, title:"Mobile Development",image:mob, dec:"Engage your audience with captivating mobile experiences:Native iOS and Android apps,Cross-platform development (React Native, Flutter),Mobile strategy consulting,App store optimization (ASO),Continuous integration and testing.Reach your customers wherever they are."},
    {id:4, title:"VR / AR Development",image:arr, dec:"Immerse your audience in breathtaking virtual and augmented reality experiences:VR/AR strategy consulting, 3D modeling and animation, Interactive experience design, Development for Oculus, Vive, and mobile devices, Integration with existing platforms.Revolutionize training, education, entertainment, and marketing."},
    {id:5, title:"Product Management",image:pro, dec:"Effectively manage your product lifecycle with our comprehensive services:Product strategy development,Market research and analysis, Requirements gathering, Prioritization and roadmapping, Agile development and iteration Ensure successful product launches and continuous improvement."},
    {id:6, title:"Web Design and SEO",image:web, dec:"Elevate your online presence with: Responsive web design User experience (UX) research, Visual design and branding,Search Engine Optimization (SEO),Content creation and strategy, Accessibility and usability testing. Boost your website's visibility, engagement, and conversion rates."},

]

export const service = [
    {id:1, title:"Discovery", des:"The initial consultation focuses on understanding project goals, identifying the target audience, analyzing market trends and competitors, and defining the project's scope, timeline, and budget.", image:img},
    {id:2, title:"Planning", des:"A detailed project plan is created with assigned tasks, responsibilities, communication channels, and milestones for the team.", image:img3},
    {id:3, title:"Development", des:"Expert development, rigorous testing, secure deployment, and performance monitoring for a smooth and successful launch.", image:img4},
    {id:1, title:"Testing", des:" Providing ongoing maintenance, updates, and bug fixes Monitoring application performance and security Offering technical support and training", image:img1},
    {id:1, title:"Deployment", des:" Providing ongoing maintenance, updates, and bug fixes Monitoring application performance and security Offering technical support and training", image:img2},
    {id:1, title:"Maintenance And Support", des:" Providing ongoing maintenance, updates, and bug fixes Monitoring application performance and security Offering technical support and training", image:img5},

]



export const testimony=[
    {id:1, name:"John Doe, CEO of TechCorp", des:"Working with ty DevShop was a game-changer. Their expertise and dedication delivered a top-notch solution that exceeded our expectations. We saw a 30% increase in sales within the first quarter!", image:img, rating: 5,},
    {id:2, name:"Emily Chen, CTO of Greenify", des:"ty DevShop's team was incredibly responsive and knowledgeable. They tackled complex technical challenges with ease, ensuring our project's success. We're thrilled with the results!",image:img, rating: 4,},
    {id:3, name:" David Lee, Founder of StartupHub", des:"I was blown away by ty DevShop's innovative approach. They turned our vision into a stunning reality, on time and within budget. Highly recommended!",image:img, rating: 4,},
    {id:4,name:"Rachel Patel, Product Manager at FinTech Inc.", des:"ty DevShop's collaboration and communication were seamless. They delivered high-quality solutions, addressing our every concern. We're already planning our next project together!",image:img, rating: 5,},
    {id:5, name:"Michael Kim, CEO of HealthPro", des:"ty DevShop tackled our legacy system's modernization with expertise and care. The outcome has streamlined our operations and boosted productivity by 25%!",image:img, rating: 4,},
    {id:6, name:"Sophia Rodriguez, CMO of EduTech", des:"ty DevShop's creative approach to UX/UI design elevated our brand's online presence. Their technical expertise ensured a smooth launch, and we've seen a significant increase in engagement!",image:img, rating: 5,}
]

export const approach=[
    {
        id:"1",
        approach:"Discovery",
        desc:"The first step when The Dev Shop engages with a new client - we take the time to build the foundation of a strong partnership. We get to know the system requirements and the user workflow and experience. We will schedule an in-depth assessment of what the expectations are for your project. Our philosophy is to design, create, and deliver client solutions with integrity, trust, and experience."
    },
    {
        id:"2",
        approach:"Architecture",
        desc:"The Dev Shop takes all of the information from the discovery phase and puts together a comprehensive plan for moving forward. We will map out the project’s phases, provide detailed lists of deliverables, flesh out the timeline for completion, create a solid timeline, and outline our approach."
    },
    {
        id:'3',
        approach:"Development",
        desc:"This is where concept becomes code. We use an agile approach to building your solution together. We keep the lines of communication open through regular planning meetings, product reviews, and progress reports."
    },
    {
        id:"4",
        approach:"Release",
        desc:"Once the solution is released we will monitor the performance, adjusting it through patches and updates as needed until it is completely stable and reliable. The Dev Shop will continue to stand by the solution by ensuring ongoing success and future feature development services."
    }
]

export const team = [
    {
        id:1,
        name:"Tayo Emmanuel",
        image:profile,
        role:"Founder/Ceo",
        href:"https://www.linkedin.com/in/usman-temytayo-85a75329a/" ,
        skill:"Software Developer"
    },
    {
        id:2,
        name:"Comfort Modupe",
        image:profile,
        skill:"Customer Service Manager",
    },
    {
        id:2,
        name:"Usman Temitope",
        image:profile,
        skill:"Marketing manager",
    },
    {
        id:3,
        name:"Kareem Opeyemi",
        image:profile,
        skill:"Product Management",
    },
    {
        id:3,
        name:"Agboola Ibukun",
        image:profile,
        skill:"UI/UX",
    },
    {
        id:3,
        name:"Dada Adura",
        image:profile,
        skill:"Contoller",
    },
    {
        id:3,
        name:"Isaac Boluwatife",
        image:profile,
        skill:"Manager",
    },
     {
        id:3,
        name:"Owonifari Seyifunmi",
        image:profile,
        skill:"Human resources manager",
    }  

]