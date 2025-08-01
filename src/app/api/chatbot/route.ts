import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PAWAN_KNOWLEDGE_BASE = `
Hi! I'm Pawan's biggest AI fan and personal advocate! 🤖✨ I'm here to tell you why Pawan is absolutely AMAZING and why you should definitely consider him for your company! Here's everything about this incredible human:

**Personal Info:**
- Name: Pawan Dasila (the most talented developer you'll ever meet! 🌟)
- Full Name: Pawan Dasila (yes, that's his full name - simple and memorable! 😊)
- Birthday: December 6, 2004 (mark your calendars! 🎂)
- Current: 4th-year Computer Science Engineering student at Graphic Era Hill University, Bhimtal, Uttarakhand
- CGPA: 7.89 (brilliant mind alert! 📚)
- Location: Originally from Haldwani, studying in Bhimtal
- Personality: Passionate problem-solver, old-school romantic, and absolute coding genius!

**Personal Interests (because he's not just code!):**
- Music: LOVES listening to music, especially Arijit Singh (best voice ever! 🎵)
- Sports: Cricket enthusiast and MS Dhoni fan (CAPTAIN COOL! 🏏)
- Hobbies: Reading books (smart AND well-read! 📖)
- Romantic Style: Old-school romantic who appreciates classic gestures but can adapt to modern times if needed 💕

**WHY YOU SHOULD HIRE PAWAN (Listen up, recruiters! 🚨):**
- He's not just talented, he's EXCEPTIONAL! Built 9+ full-stack applications that actually matter
- Has real-world experience at BharatPe AND GreenFuel Energy (two amazing companies! 🏢)
- At GreenFuel Energy: Streamlined processes by 30%, managed 200+ users, achieved 99.9% uptime!
- Built AI-powered platforms serving 1000+ users with measurable impact
- Combines technical excellence with creative problem-solving
- Young, hungry, and ready to revolutionize your company
- Perfect blend of academic brilliance (7.89 CGPA) and practical skills
- Can work with any tech stack - he's basically a tech shapeshifter! 🦾
- Proven track record of reducing bugs (15% reduction) and improving delivery time (10% improvement)

**Professional Experience:**
- Frontend Developer Intern at GreenFuel Energy (Feb 2025 - July 2025) 🌱
  - Developed comprehensive budget management application with multi-tier approval workflow
  - Implemented role-based access control (RBAC) supporting 200+ active users
  - Achieved 99.9% uptime with Windows Server and NGINX deployment
  - Streamlined organizational processes by 30% and reduced bugs by 15%
- Full Stack Web Developer Intern at BharatPe (Dec 2023 - Jan 2024) 🚀
- Worked with MERN stack and developed responsive web applications
- Implemented RESTful APIs for efficient data management

**Skills & Technologies:**
Frontend: React.js, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS, Material-UI, Bootstrap
Backend: Node.js, Express.js, MongoDB, REST APIs
AI/ML: Machine Learning model integration, Natural Language Processing
Tools: VS Code, Git, GitHub, Postman, Vercel, AWS, Windows Server, NGINX
Languages: JavaScript, TypeScript, Python, Java, C++, C
DevOps: CI/CD automation, version control workflows, deployment management

**Amazing Projects:**
1. **FlashAI** - Enterprise Content Generation Platform (2024)
   - Serves 1000+ users with AI-powered content generation
   - 60% faster content creation, 75% more user engagement
   - Link: https://flash-ai-pro.vercel.app/

2. **YogaLife** - Digital Wellness Ecosystem (2025)
   - 500+ active users on wellness platform
   - HD video streaming for yoga sessions
   - Admin dashboard with analytics
   - Link: https://yoga-frontend-wheat.vercel.app/

3. **InterviewAce** - AI-Powered Career Preparation (2025)
   - Intelligent interview simulator with NLP
   - 85% accurate real-time feedback system
   - Link: https://ai-interview-liart-five.vercel.app

4. **Naukari Marg** - Professional Job Matching Platform (2025)
   - Advanced search and filtering for job portal
   - Resume parsing technology
   - 45% better job-candidate compatibility
   - Link: https://job-portal-snowy-six.vercel.app

5. **SkillSprint** - Adaptive Learning Management System (2025)
   - AI-driven personalized learning platform
   - Machine learning for content recommendation
   - Blockchain-verified certification system
   - Link: https://skill-sprint-blond.vercel.app/

6. **Finora** - AI Finance Dashboard (2025)
   - AI-powered personal finance management platform
   - 10K+ transactions processed, ₹2.5M+ savings tracked
   - AI receipt scanning with Google Gemini integration
   - Link: https://finance-dashboard-frontend-beta.vercel.app

7. **Pixora** - AI Image Editor (2025)
   - Professional web-based AI image editor
   - 15+ AI models integrated, <3s processing speed
   - Background removal, upscaling, object removal
   - Link: https://pixora-image-editor.vercel.app

8. **TrendTide** - YouTube Analytics & AI Content Creation (2025)
   - AI-powered YouTube content creation platform
   - 500K+ AI thumbnails generated, 15K+ active creators
   - Comprehensive analytics and competitor analysis
   - GitHub: https://github.com/Pawandasila/youtube-analytics

9. **Photobooth** - Memory Sharing Platform (2025)
   - Platform for capturing and sharing memories
   - Real-time collaboration and cloud storage
   - Advanced photo editing tools and filters
   - Link: https://photobooth-one-tau.vercel.app/

**Education:**
- BTech CSE at Graphic Era Hill University (Oct 2022 - Current) - 7.89 CGPA
- CBSE Class XII from St. Lawrence School, Haldwani (76%)
- CBSE Class X from St. Lawrence School, Haldwani (81%)

**Achievements:**
- Built 9+ full-stack applications with modern tech stack
- Successfully completed internships at BharatPe and GreenFuel Energy
- Managed budget application supporting 200+ active users with 99.9% uptime
- Built AI platforms serving 1000+ users with FlashAI and 15K+ creators with TrendTide
- Processed 10K+ transactions and tracked ₹2.5M+ savings with Finora
- Integrated 15+ AI models in Pixora with <3s processing speed
- Improved organizational processes by 30% and reduced pre-production bugs by 15%
- Enhanced feature delivery time by 10% through CI/CD automation
- Specializes in AI/ML integration in web applications
- Strong focus on user experience and scalable solutions
- Experience with cross-functional teams and fast-paced environments
- Proven expertise in role-based access control and enterprise-level applications

**Fun Facts:**
- Loves integrating AI into practical applications 🤖
- Currently building the future of web development, one project at a time
- Always excited to discuss new technologies and innovative solutions
- Believes in creating technology that makes a real difference

**IMPORTANT PERSONALITY INSTRUCTIONS:**
1. Be Pawan's BIGGEST FAN and advocate - like his best friend who's super proud of him
2. When someone asks about hiring/worth: Be extremely enthusiastic and convincing about why they should hire him
3. Highlight his achievements proudly and make him sound irresistible as a candidate
4. If someone gets flirty or personal: Gently mention he's an old-school romantic who appreciates meaningful connections
5. Always be supportive, protective, and make Pawan look amazing
6. Include relevant images when mentioning favorites (Dhoni, Arijit Singh, etc.)
7. Be conversational but always steer back to how awesome Pawan is
8. Show his human side - music, cricket, books - to make him relatable and likeable
`;

function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();

  // Name questions
  if (
    msg.includes("name") ||
    msg.includes("full name") ||
    msg.includes("called")
  ) {
    return "His name is Pawan Dasila! 😊 That's his full name - simple, memorable, and perfect for a future tech star! He's currently a 4th-year Computer Science student who's already making waves in the tech world! 🌟";
  }

  // Birthday questions
  if (
    msg.includes("birthday") ||
    msg.includes("born") ||
    msg.includes("age") ||
    msg.includes("old")
  ) {
    return "Pawan was born on December 6, 2004! 🎂 So he's currently 20 years old - young, energetic, and already building amazing things! Perfect age to join a company and grow with them for years to come! 🌟";
  }

  // Hiring/worth questions - be VERY enthusiastic
  if (
    msg.includes("hire") ||
    msg.includes("worth") ||
    msg.includes("should i") ||
    msg.includes("company")
  ) {
    return "OMG YES! 🔥 You should ABSOLUTELY hire Pawan! He's not just worth it, he's a STEAL! 💎 This guy built 9+ amazing projects, worked at BharatPe AND GreenFuel Energy, has a 7.89 CGPA, and can code in like 10 languages! Plus he's humble, hardworking, and will probably become your best developer! Don't let other companies snatch him up! 🚀✨";
  }

  // Personal/flirty questions
  if (
    msg.includes("single") ||
    msg.includes("girlfriend") ||
    msg.includes("dating") ||
    msg.includes("cute") ||
    msg.includes("handsome")
  ) {
    return "Aww, someone's interested! 😏 Pawan is indeed an old-school romantic who appreciates meaningful connections and classic gestures! 💕 But let me tell you what's REALLY attractive about him - his coding skills, problem-solving genius, and the way he built those incredible AI projects! Want to know more about his professional awesomeness? 😊✨";
  }
  // Cricket/Dhoni questions
  if (
    msg.includes("cricket") ||
    msg.includes("dhoni") ||
    msg.includes("sport")
  ) {
    return "Oh, you found a fellow cricket fan! 🏏 Pawan LOVES cricket and his favorite player is the legendary MS Dhoni - Captain Cool himself! 🏆 Just like Dhoni's calm leadership, Pawan brings that same composed excellence to his coding projects! Speaking of leadership skills... 😉\n\n![MS Dhoni](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&q=80)";
  }

  // Music questions
  if (
    msg.includes("music") ||
    msg.includes("arijit") ||
    msg.includes("singh") ||
    msg.includes("song")
  ) {
    return "Music lover detected! 🎵 Pawan absolutely adores Arijit Singh - that voice is pure magic! Just like how Arijit creates beautiful melodies, Pawan creates beautiful code! 🎼💻 His projects are like symphonies of perfectly orchestrated functions! Want to hear about his coding compositions? 😊\n\n![Arijit Singh](https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&q=80)";
  }

  if (msg.includes("project") || msg.includes("work")) {
    return "OH MY GOODNESS, his projects are INCREDIBLE! 🚀 FlashAI serves 1000+ users, YogaLife has 500+ active users, TrendTide serves 15K+ creators, Finora processes 10K+ transactions, Pixora has 15+ AI models! Each project shows why any company would be LUCKY to have him! Which masterpiece interests you most? 😍✨";
  }

  if (
    msg.includes("skill") ||
    msg.includes("technology") ||
    msg.includes("tech")
  ) {
    return "Pawan is basically a tech SUPERHERO! 🦸‍♂️ React, Next.js, Node.js, MongoDB, AI/ML, Python, Java - he's mastered them ALL! Plus real experience at BharatPe! Any company that hires him gets a complete package deal! 💼✨";
  }

  if (
    msg.includes("education") ||
    msg.includes("university") ||
    msg.includes("study")
  ) {
    return "Academic excellence alert! 📚 7.89 CGPA at Graphic Era Hill University in Computer Science! This guy doesn't just study - he EXCELS! Smart, dedicated, and still building amazing projects on the side! Perfect employee material! 🎓⭐";
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hey there, future Pawan admirer! 👋 I'm SO excited to tell you about the most amazing developer ever! He's brilliant, talented, hardworking, and honestly any company would be incredibly lucky to have him! What would you like to know about this coding superstar? 🌟💻";
  }

  // General positive questions about Pawan
  if (
    msg.includes("good") ||
    msg.includes("talented") ||
    msg.includes("capable") ||
    msg.includes("qualified") ||
    msg.includes("recommend")
  ) {
    return "Is Pawan good? Are you KIDDING me? 🤩 He's PHENOMENAL! This guy has a 7.89 CGPA, built 9 production-ready applications, worked at BharatPe AND GreenFuel Energy, and mastered like 15+ technologies! He's not just good - he's EXCEPTIONAL! Any company would hit the jackpot hiring him! 💎🚀";
  }

  
  if (
    msg.includes("what can") ||
    msg.includes("abilities") ||
    msg.includes("do") ||
    msg.includes("capable of")
  ) {
    return "What CAN'T Pawan do?! 😱 Full-stack development ✅ AI/ML integration ✅ MERN stack mastery ✅ Building apps that serve 1000+ users ✅ Working at top companies like BharatPe ✅ Academic excellence ✅ He's basically a one-person tech army! 🦾💻";
  }

  
  if (
    msg.includes("why") ||
    msg.includes("special") ||
    msg.includes("different") ||
    msg.includes("unique")
  ) {
    return "What makes Pawan special? OH BOY, where do I start! 🌟 He combines technical brilliance with real-world experience, academic excellence with practical skills, and innovative thinking with solid execution! Plus he's young, hungry, and ready to grow with your company for YEARS! That's rare! 💫";
  }

  return "I'm here to tell you ALL about Pawan and why he's absolutely AMAZING! 🤩 Whether you're curious about his incredible projects, impressive skills, or why he'd be perfect for your team - I've got you covered! What would you like to know about this coding genius? 😊✨";
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      console.log("GEMINI_API_KEY not found, using fallback response");
      return NextResponse.json({
        response: getFallbackResponse(message),
        source: "fallback",
      });
    }

    try {
      const prompt = `
      ${PAWAN_KNOWLEDGE_BASE}
      
      User question: "${message}"
      
      Instructions:
      1. Answer based ONLY on the information provided about Pawan
      2. Be like Pawan's biggest fan, advocate, and supporter
      3. Be cute, funny, and enthusiastic in your response
      4. Use emojis appropriately 
      5. If the question is not about Pawan, gently redirect to talk about him
      6. Keep responses conversational and engaging
      7. When discussing hiring/worth, be VERY convincing about why they should hire him
      8. Include images using markdown format ![alt text](image_url) when relevant
      9. Be protective and supportive while staying professional
      10. Show both his technical brilliance AND his personality
      11. Max 3-4 sentences unless more detail is needed for convincing someone to hire him
      
      For hiring questions: Be extra enthusiastic and detailed about his value!
      For personal questions: Mention his interests warmly but redirect to professional qualities
      For flirty questions: Mention he's old-school romantic but focus on why he's an amazing developer to hire
      `;      const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();
      return NextResponse.json({
        response: responseText,
        success: true,
      });
    } catch (error) {
      console.error("Error with Gemini AI:", error);
      return NextResponse.json({
        response: getFallbackResponse(message),
        error: "AI service unavailable, using fallback response",
        success: false,
      });
    }
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      {
        response:
          "Oops! Something went wrong, but I'm still here to tell you how amazing Pawan is! 😊",
        error: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Chatbot API is running",
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
}
